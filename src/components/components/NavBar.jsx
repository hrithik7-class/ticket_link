import React from "react";

/**
 * Simple nav that updates hash (no router library)
 */
export default function NavBar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-black">TICKET_MANAGEMENT</div>
          <nav className="hidden md:flex gap-2">
            <a
              href="#/new-ticket"
              className="px-3 py-1 rounded hover:bg-gray-100 text-sm"
            >
              New Ticket
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#/new-ticket"
            className="bg-yellow-400 px-3 py-1 rounded text-black text-sm font-medium"
          >
            + New Ticket
          </a>
        </div>
      </div>
    </header>
  );
}
