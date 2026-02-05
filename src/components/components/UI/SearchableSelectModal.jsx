
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchableSelectModal = ({ isOpen, onClose, title, options, onSelect, selectedValue }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        if (isOpen) {
            setSearchTerm('');
            setFilteredOptions(options);
        }
    }, [isOpen, options]);

    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();
        setFilteredOptions(
            options.filter(opt =>
                String(opt).toLowerCase().includes(lowerSearch)
            )
        );
    }, [searchTerm, options]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[var(--qs-blue)] p-4 flex items-center justify-between text-white shrink-0">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        {title}
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                        <FaTimes />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="p-4 border-b border-gray-100 shrink-0">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search options..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--qs-blue)] focus:border-transparent transition-all outline-none"
                            autoFocus
                        />
                    </div>
                </div>

                {/* Options List */}
                <div className="overflow-y-auto flex-1 p-2">
                    {filteredOptions.length > 0 ? (
                        <div className="grid grid-cols-1 gap-1">
                            {filteredOptions.map((opt, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        onSelect(opt);
                                        onClose();
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${selectedValue === opt
                                            ? 'bg-blue-50 text-[var(--qs-blue)] border border-blue-100'
                                            : 'text-gray-700 hover:bg-gray-50 hover:pl-6'
                                        }
                  `}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            No options found
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SearchableSelectModal;
