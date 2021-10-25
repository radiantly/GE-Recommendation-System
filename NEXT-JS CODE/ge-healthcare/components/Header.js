import React from 'react'
import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Header - left */}
            <div className = "flex items-center">
                <h1 className="m-px">GE-HEALTHCARE</h1>
                <h2 className="m-px ml-8">ABOUT</h2>
            </div>
            {/* Header - center */}
            <div className="hidden md:inline-flex flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="outline-none ml-2 items-center bg-transparent placeholder-gray-500 flex-shrink"
            placeholder="Search for products"
          />
        </div>
        </div>
    )
}

export default Header;
