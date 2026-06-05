"use client";
import React, { useState,useEffect} from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Active State 
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main[id], section[id]');
      let current = '';

      sections.forEach((section) => {
        // หาตำแหน่งด้านบนของแต่ละ Section
        const sectionTop = (section as HTMLElement).offsetTop;
        // ถ้าระยะการเลื่อน (scrollY) มาถึง Section นั้นแล้ว (-150 คือเผื่อระยะความสูง Navbar ไว้)
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    // สั่งให้ระบบเรียกฟังก์ชันนี้ทุกครั้งที่เลื่อนจอ
    window.addEventListener('scroll', handleScroll);
    // ทำงาน 1 ครั้งตอนเปิดเว็บ เพื่อเช็คตำแหน่งปัจจุบัน
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 w-full bg-slate-50/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-black text-slate-900 tracking-tight">
          Portfolio.
        </div>

        {/* 3. เมนูจอคอม: ใช้เงื่อนไขเช็คว่าถ้า activeSection ตรงกับชื่อลิงก์ ให้แสดงสีน้ำเงิน (text-rose-600) */}
        <ul className="hidden md:flex gap-8 font-semibold text-sm">
          <li>
            <a href="#about" className={`transition-all duration-200 active:scale-95 inline-block ${activeSection === 'about' ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'}`}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={`transition-all duration-200 active:scale-95 inline-block ${activeSection === 'skills' ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={`transition-all duration-200 active:scale-95 inline-block ${activeSection === 'projects' ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className={`transition-all duration-200 active:scale-95 inline-block ${activeSection === 'experience' ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Experience
            </a>
          </li>
          <li>
            <a href="#journey" className={`transition-all duration-200 active:scale-95 inline-block ${activeSection === 'journey' ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Journey
            </a>
          </li>
        </ul>

        {/* ปุ่มด้านขวาและปุ่ม Hamburger (เหมือนเดิม) */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-block px-6 py-2.5 bg-rose-900 text-white text-sm font-semibold rounded-full hover:bg-rose-800 transition">
            Contact
          </a>
          
          <button 
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 4. เมนูมือถือ: เพิ่มการไฮไลต์สีน้ำเงินให้เหมือนกันค่ะ */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-semibold text-center">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'about' ? 'text-rose-600' : 'text-slate-600'}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'skills' ? 'text-rose-600' : 'text-slate-600'}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'projects' ? 'text-rose-600' : 'text-slate-600'}>Project</a></li>
            <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'experience' ? 'text-rose-600' : 'text-slate-600'}>Experience</a></li>
            <li><a href="#journey" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'journey' ? 'text-rose-600' : 'text-slate-600'}>Journey</a></li>
            <li className="pt-2 border-t border-slate-100">
              <a href="#contact" className="text-rose-600" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

//End Navbar