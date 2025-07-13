import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-red-700 px-8 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 8-13 8-13s8 8.582 8 13c0 4.418-3.582 8-8 8z" />
                    <circle cx="12" cy="13" r="4" fill="white" />
                </svg>
                <span className="text-3xl font-extrabold text-white tracking-wide">Blood Bank Storage</span>
            </div>
            <div className="md:flex hidden space-x-8">
                <a href="#" className="text-lg text-white hover:border-b-2 hover:text-red-200 font-semibold transition-all">Home</a>
                <a href="#donors" className="text-lg text-white hover:border-b-2 hover:text-red-200 font-semibold transition-all">Donors</a>
                <a href="#insert" className="text-lg text-white hover:border-b-2 hover:text-red-200 font-semibold transition-all">Insert</a>
                <a href="#" className="text-lg text-white hover:border-b-2 hover:text-red-200 font-semibold transition-all">About</a>
            </div>
        </nav>
    )
}

export default Navbar
