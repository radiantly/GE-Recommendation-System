import React from 'react';
import HeaderIcon from "./HeaderIcon";
import { ShoppingCartIcon, SearchIcon,} from "@heroicons/react/outline";
import { BellIcon, HomeIcon} from "@heroicons/react/solid";
import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Header - left */}
            <div className = "flex items-center mr-20 p-2	ml-40">
                <h1 className="m-px">GE-HEALTHCARE</h1> 
                <Button>  <h2 className="px-8">ABOUT</h2> </Button>
            </div>
            <div className="hidden md:inline-flex flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input
                  className="outline-none ml-2 items-center bg-transparent placeholder-gray-500 flex-shrink"
                  placeholder="Search for products"
                />
            </div>
            {/* Header - right */}
            <div className="flex items-center sm:space-x-2 justify-end px-60 ">
              <Button variant="outlined">LOGIN/REGISTER</Button>
            </div>
            <div className="flex space-x-6 md:space-x-2 ml-20">
                <HeaderIcon Icon={HomeIcon}  />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={BellIcon} />
            </div>
              
        </div>
    )
}

export default Header;
