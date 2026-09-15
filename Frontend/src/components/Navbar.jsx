import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, MoveRight } from 'lucide-react'
import { AppContext } from '../Contents/contentData'



const Navbar = () => {

    const {navigationItems} = useContext(AppContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="relative z-50 flex w-full justify-center px-4 sm:px-6 lg:px-10">

            <div className="relative flex w-full max-w-7xl items-center justify-between py-3">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className="text-xl font-semibold tracking-tight text-gray-900"
                >
                    Analyzer
                </NavLink>


                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">

                    {navigationItems.map((navigationItem) => (
                        <NavLink
                            key={navigationItem.name}
                            to={navigationItem.to}
                            className={({ isActive }) =>
                                `relative px-2 py-2 text-sm font-medium transition-colors duration-200
                                ${isActive
                                    ? 'text-blue-500'
                                    : 'text-gray-600 hover:text-blue-500'
                                }`
                            }
                        >
                            {navigationItem.name}
                        </NavLink>
                    ))}

                    {/* Analyze Button */}
                    <NavLink
                        to="/analyze"
                        className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
                    >
                        Analyze Your Resume

                        <MoveRight
                            size={19}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </NavLink>

                </div>


                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>


                {/* Mobile Navigation */}
                <div
                    className={`
                        absolute left-0 top-full mt-3 w-full overflow-hidden rounded-2xl
                        border border-gray-200 bg-white shadow-xl
                        transition-all duration-300 lg:hidden
                        ${isMenuOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-3 opacity-0'
                        }
                    `}
                >

                    <div className="flex flex-col p-4">

                        {/* Navigation Links */}
                        {navigationItems.map((navigationItem) => (
                            <NavLink
                                key={navigationItem.name}
                                to={navigationItem.to}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors
                                    ${isActive
                                        ? 'bg-blue-50 text-blue-500'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                                    }`
                                }
                            >
                                {navigationItem.name}
                            </NavLink>
                        ))}


                        {/* Divider */}
                        <div className="my-3 h-px bg-gray-100" />


                        {/* Analyze Button */}
                        <NavLink
                            to="/analyze"
                            onClick={closeMenu}
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
                        >
                            Analyze Your Resume

                            <MoveRight
                                size={19}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </NavLink>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar