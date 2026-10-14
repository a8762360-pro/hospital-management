
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

import {
    FaBars,
    FaTimes,
    FaSearch,
    FaUserCircle,
    FaCalendarCheck,
    FaSignOutAlt
} from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutUs' },
        { name: 'Services', path: '/services' },
        { name: 'Doctors', path: '/doctors' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' }
    ];

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogOut = async () => {
        try {
            await logOut();
            localStorage.removeItem('token');
            closeMenu();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const query = search.trim();

        if (query) {
            navigate(`/doctors?search=${encodeURIComponent(query)}`);
            setSearch('');
            closeMenu();
        }
    };

    const desktopLinkClass = ({ isActive }) =>
        `whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
            isActive
                ? 'bg-btn3 text-white shadow-md'
                : 'text-white hover:bg-white/10 hover:text-white'
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
            isActive
                ? 'bg-btn3 text-white shadow-sm'
                : 'text-white hover:bg-white/10'
        }`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary text-white shadow-md">

            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Main Navbar */}
                <div className="flex min-h-[76px] items-center justify-between gap-3">

                    {/* Desktop Navigation */}
                    <div className="hidden xl:block">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={desktopLinkClass}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side Actions */}
                    <div className="ml-auto flex items-center gap-2 sm:gap-3">

                        {/* Search */}
                        <form
                            onSubmit={handleSearch}
                            className="hidden items-center rounded-full border border-gray-200 bg-white px-3 py-2 transition focus-within:border-btn3 lg:flex"
                        >
                            <FaSearch className="text-sm text-gray-400" />

                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search doctors..."
                                aria-label="Search doctors"
                                className="w-28 bg-transparent pl-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:w-36"
                            />
                        </form>

                        {/* Appointment */}
                        {user?.role === 'patient' && (
                            <NavLink
                                to="/appoinment"
                                className="hidden items-center gap-2 rounded-full bg-btn3 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 lg:flex"
                            >
                                <FaCalendarCheck />
                                Appointment
                            </NavLink>
                        )}

                        {/* Dashboard */}
                        {user && (
                            <NavLink
                                to="/dashbord"
                                className={({ isActive }) =>
                                    `hidden items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition md:flex ${
                                        isActive
                                            ? 'border-btn3 bg-btn3 text-white'
                                            : 'border-white/40 text-white hover:border-btn3 hover:bg-white/10'
                                    }`
                                }
                            >
                                <FaUserCircle className="text-lg" />
                                Dashboard
                            </NavLink>
                        )}

                        {/* Login / Logout */}
                        {user ? (
                            <button
                                type="button"
                                onClick={handleLogOut}
                                className="hidden items-center gap-2 rounded-full bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 lg:flex"
                            >
                                <FaSignOutAlt />
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/loginPortal"
                                className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-btn3 hover:text-white lg:block"
                            >
                                Login
                            </NavLink>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-xl text-white transition hover:bg-white/10 xl:hidden"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Tablet Navigation */}
                <div className="hidden border-t border-white/10 py-3 lg:block xl:hidden">
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                        {navLinks.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={desktopLinkClass}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`grid transition-all duration-300 xl:hidden ${
                        menuOpen
                            ? 'grid-rows-[1fr] pb-4 opacity-100'
                            : 'grid-rows-[0fr] pb-0 opacity-0'
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="rounded-2xl border border-white/10 bg-secondary p-3">

                            {/* Mobile Search */}
                            <form
                                onSubmit={handleSearch}
                                className="mb-3 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 lg:hidden"
                            >
                                <FaSearch className="text-gray-400" />

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search doctors..."
                                    aria-label="Search doctors"
                                    className="w-full bg-transparent text-sm text-gray-700 outline-none"
                                />

                                <button
                                    type="submit"
                                    aria-label="Submit search"
                                    className="rounded-lg bg-btn3 p-2 text-white"
                                >
                                    <FaSearch />
                                </button>
                            </form>

                            {/* Navigation Links */}
                            <ul className="flex flex-col gap-1">
                                {navLinks.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            onClick={closeMenu}
                                            className={mobileLinkClass}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* User Actions */}
                            <div className="mt-3 flex flex-col gap-2 border-t border-white/15 pt-3">

                                {user?.role === 'patient' && (
                                    <NavLink
                                        to="/appoinment"
                                        onClick={closeMenu}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-btn3 px-4 py-3 font-semibold text-white transition hover:brightness-110"
                                    >
                                        <FaCalendarCheck />
                                        Book Appointment
                                    </NavLink>
                                )}

                                {user && (
                                    <NavLink
                                        to="/dashbord"
                                        onClick={closeMenu}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                                    >
                                        <FaUserCircle />
                                        Dashboard
                                    </NavLink>
                                )}

                                {user ? (
                                    <button
                                        type="button"
                                        onClick={handleLogOut}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                                    >
                                        <FaSignOutAlt />
                                        Logout
                                    </button>
                                ) : (
                                    <NavLink
                                        to="/loginPortal"
                                        onClick={closeMenu}
                                        className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-secondary transition hover:bg-btn3 hover:text-white"
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default NavBar;