
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
interface SearchBarProps {
    placeholder?: string;
    className?: string;
}
function SearchBar({ placeholder , className }: SearchBarProps) {
    const [query, setQuery] = useState('');

    return (
        <div className={`relative ${className}`} >
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className='w-6 h-re text-gray-500'/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar