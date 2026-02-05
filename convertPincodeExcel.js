// convertPincodeExcel.js
// Usage: node convertPincodeExcel.js ./path/to/your_excel_file.xlsx ./output/pincode_lookup.json

import fs from "fs";
import path from "path";
import XLSX from "xlsx";

function usage() {
  console.log("Usage: node convertPincodeExcel.js <input-xlsx> <output-json>");
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) usage();

const inputPath = args[0];
const outputPath = args[1];

if (!fs.existsSync(inputPath)) {
  console.error("Input file not found:", inputPath);
  process.exit(2);
}

const workbook = XLSX.readFile(inputPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

// normalize column name detection (common names)
function pickValue(row, candidates) {
  for (const key of Object.keys(row)) {
    const k = key.toString().toLowerCase().trim();
    for (const cand of candidates) {
      if (k.includes(cand)) return row[key];
    }
  }
  return "";
}

const lookup = {};
for (const r of rows) {
  // detect pincode column value
  const pVal = pickValue(r, ["pincode", "pin", "pin code", "pin_code", "pincode."]);
  let pincode = String(pVal).trim();
  if (!pincode) {
    // try numeric columns that look like 6-digit
    for (const k of Object.keys(r)) {
      const v = r[k];
      if (typeof v === "number" && Number.isFinite(v)) {
        const s = String(Math.trunc(v));
        if (/^\d{6}$/.test(s)) { pincode = s; break; }
      }
      if (typeof v === "string" && /^\d{6}$/.test(v.trim())) {
        pincode = v.trim(); break;
      }
    }
  }
  if (!/^\d{6}$/.test(pincode)) continue;

  const state = pickValue(r, ["state", "statename", "state name"]);
  const district = pickValue(r, ["district", "districtname", "district name"]);
  const officename = pickValue(r, ["officename", "office name", "postoffice"]);
  const latitude = pickValue(r, ["latitude", "lat"]);
  const longitude = pickValue(r, ["longitude", "long", "longitude"]);

  lookup[pincode] = {
    state: String(state || "").trim(),
    district: String(district || "").trim(),
    officename: String(officename || "").trim(),
    latitude: latitude !== undefined ? String(latitude).trim() : "",
    longitude: longitude !== undefined ? String(longitude).trim() : ""
  };
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(lookup, null, 2), "utf8");
console.log("Saved pincode lookup to", outputPath, "entries:", Object.keys(lookup).length);
