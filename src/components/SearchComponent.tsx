"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Users, Package, User, Eye, Edit, Trash2 } from "lucide-react";
import { searchData, SearchResult } from "../lib/mockData";

interface SearchComponentProps {
  placeholder?: string;
  className?: string;
  onResultClick?: (result: SearchResult) => void;
}

export function SearchComponent({ 
  placeholder = "Search order, products vendors....", 
  className = "",
  onResultClick 
}: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchData(query);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    }
    setIsOpen(false);
    setSelectedIndex(-1);
    console.log(`Clicked: ${result.type} - ${result.title}`);
  };

  const getIconComponent = (iconName: string, type: string) => {
    const iconClass = "size-4";
    switch (iconName) {
      case "users":
        return <Users className={`${iconClass} text-blue-600`} />;
      case "package":
        return <Package className={`${iconClass} text-green-600`} />;
      case "user":
        return <User className={`${iconClass} text-purple-600`} />;
      default:
        return <Search className={`${iconClass} text-gray-400`} />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "active":
        return "text-green-600";
      case "pending":
        return "text-yellow-600";
      case "suspended":
        return "text-red-600";
      case "delivered":
        return "text-green-600";
      case "processing":
        return "text-blue-600";
      case "shipped":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] border border-gray-200 hover:border-blue-300 focus-within:border-blue-500 transition-colors duration-200">
        <div className="relative shrink-0 size-[18.5px]">
          <div className="absolute inset-[-4.05%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <path
                d="M9.033 17.0777C10.6238 17.0792 12.1794 16.6094 13.5034 15.7275C14.8274 14.8456 15.8604 13.5912 16.472 12.1227C17.0833 10.6539 17.2445 9.03674 16.9352 7.47624C16.626 5.91574 15.8602 4.48226 14.735 3.35766C13.6105 2.23261 12.1777 1.46618 10.6177 1.15522C9.05769 0.844263 7.44052 1.00274 5.97057 1.61063C4.50062 2.21852 3.24387 3.24852 2.35915 4.57047C1.47443 5.89242 1.00145 7.44697 1 9.03766C1 11.1687 1.846 13.2117 3.352 14.7187C4.85848 16.2258 6.90107 17.0741 9.032 17.0777M14.738 14.7407L19.5 19.4997"
                stroke="#E5E7EB"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap bg-transparent border-none outline-none w-full"
        />
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={`${result.type}-${result.id}`}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                index === selectedIndex ? "bg-blue-50" : ""
              }`}
              onClick={() => handleResultClick(result)}
            >
              <div className="flex-shrink-0">
                {getIconComponent(result.icon, result.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {result.title}
                  </h4>
                  {result.status && (
                    <span className={`text-xs font-medium ${getStatusColor(result.status)}`}>
                      {result.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{result.subtitle}</p>
                <p className="text-xs text-gray-500 truncate">{result.description}</p>
              </div>
              <div className="flex-shrink-0 flex gap-1">
                <button
                  className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`View ${result.type}: ${result.title}`);
                  }}
                >
                  <Eye className="size-4" />
                </button>
                <button
                  className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Edit ${result.type}: ${result.title}`);
                  }}
                >
                  <Edit className="size-4" />
                </button>
                <button
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Delete ${result.type}: ${result.title}`);
                  }}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <p className="text-sm text-gray-500 text-center">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}
