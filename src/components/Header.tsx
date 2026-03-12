// src/components/Header.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    // حالة للتحكم في ظهور قائمة الجوال
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // دالة لتبديل حالة القائمة
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        // الهيدر الرئيسي
        <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-sm">

            {/* الحاوية العلوية (الشعار وزر البرجر) */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-50">

                {/* قسم الشعار */}
                <Link href="/" className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                    <span className="text-2xl font-extrabold text-blue-500 tracking-tight">عبدالعزيز المالكي</span>
                    <span className="text-sm font-medium text-slate-400 hidden sm:block">| IT & Systems Engineer</span>
                </Link>

                {/* زر القائمة للشاشات الصغيرة (البرجر) */}
                <button
                    className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2 transition-transform duration-300"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>

                {/* روابط الشاشات الكبيرة (تختفي في الجوال) */}
                <nav className="hidden md:flex items-center gap-6 font-medium">
                    <Link href="/" className="text-slate-300 hover:text-blue-400 transition duration-300">الرئيسية</Link>
                    <Link href="/about" className="text-slate-300 hover:text-blue-400 transition duration-300">عني</Link>
                    <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition duration-300">مشاريعي</Link>
                    <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition duration-300 shadow-md">
                        تواصل معي
                    </Link>
                </nav>

            </div>

            {/* قائمة الجوال المنسدلة (Dropdown) */}
            {/* استخدمنا absolute top-full لتسقط القائمة أسفل الهيدر مباشرة، مع انتقال ناعم للارتفاع والشفافية */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 py-8 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col items-center gap-8 font-medium">
                    <Link href="/" onClick={toggleMenu} className="text-slate-300 hover:text-blue-400 transition duration-300">الرئيسية</Link>
                    <Link href="/about" onClick={toggleMenu} className="text-slate-300 hover:text-blue-400 transition duration-300">عني</Link>
                    <Link href="/projects" onClick={toggleMenu} className="text-slate-300 hover:text-blue-400 transition duration-300">مشاريعي</Link>
                    <Link href="/contact" onClick={toggleMenu} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300 shadow-lg shadow-blue-500/20">
                        تواصل معي
                    </Link>
                </nav>
            </div>

        </header>
    );
}