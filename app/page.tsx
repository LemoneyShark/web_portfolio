"use client";
import React, { useState,useEffect} from 'react';
import { SKILLS_DATA, EXPERIENCES_DATA,WORKS_DATA,JOURNEY_DATA,CERTIFICATIONS_DATA} from './data';
import Navbar from '../components/Navbar';

function ExperienceCard({ data }: { data: any }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (data.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [data.images.length]);

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* กล่องรูปภาพ */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-slate-200">
        {data.images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`${data.title} screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImg ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105 transition-transform duration-700`}
          />
        ))}
        
        {data.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {data.images.map((_: any, index: number) => (
              <div 
                key={index} 
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImg ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>

      <h4 className="text-rose-600 font-bold tracking-wide text-xs uppercase mb-2">
        {data.category}
      </h4>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {data.title}
      </h3>

      {/* เพิ่มส่วน Tech Stack (ป้ายกรอบมน) */}
      {data.techStack && (
        <div className="flex flex-wrap gap-2 mb-4">
          {data.techStack.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-rose-50 text-rose-700 text-[11px] font-bold uppercase tracking-wider rounded-full border border-rose-100"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* ข้อความอธิบาย */}
      <p className="text-slate-500 text-sm leading-relaxed pr-4 mb-5">
        {data.description}
      </p>

      {/* ข้อมูลเพิ่มเติม: ระยะเวลา และ จำนวนคน */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{data.duration}</span>
        </div>

        <span className="w-1 h-1 rounded-full bg-slate-300"></span>

        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>{data.teamSize}</span>
        </div>
      </div>
    </div>
  );
}

// Component สำหรับการ์ดหน้าจอใหญ่ (มีปุ่มกด + ออโต้สไลด์)
function WorkCard({ data }: { data: any }) {
  const [currentImg, setCurrentImg] = useState(0);

  // ระบบเลื่อนออโต้ (ดีเลย์ 4 วินาที)
  // สังเกตว่าเราใส่ currentImg ไว้ใน [] ด้านหลัง เพื่อให้เวลารีเซ็ตใหม่ทุกครั้งที่เรากดปุ่มเองค่ะ
  useEffect(() => {
    if (data.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [data.images.length, currentImg]);

  // ฟังก์ชันกดปุ่มถัดไป
  const nextImg = () => {
    setCurrentImg((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  // ฟังก์ชันกดปุ่มย้อนกลับ
  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full mb-20 flex flex-col group">
      {/* กล่องรูปภาพขนาดใหญ่ (aspect-video คือสัดส่วน 16:9) */}
      <div className="relative w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden mb-6 bg-slate-900 shadow-xl">
        {data.images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`${data.title} slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-700 ease-in-out ${
              index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* ปุ่มลูกศรซ้าย-ขวา (จะโผล่มาเมื่อเอาเมาส์ชี้รูปภาพ group-hover:opacity-100) */}
        {data.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/90 text-white hover:text-slate-900 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/90 text-white hover:text-slate-900 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* จุดไข่ปลาด้านล่าง (สามารถกดเปลี่ยนรูปได้ด้วย) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {data.images.map((_: any, index: number) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImg(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ข้อความอธิบายด้านล่าง */}
      <h4 className="text-rose-600 font-bold tracking-widest text-xs uppercase mb-2">
        {data.category}
      </h4>
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
        {data.title}
      </h3>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
        {data.description}
      </p>
    </div>
  );
}

// Landing Page
export default function PortfolioPage() {

  // สร้าง State สำหรับจดจำหมวดหมู่ที่เลือก และสถานะปุ่ม MORE
  const [activeFilter, setActiveFilter] = useState('PROGRAMMING');
  const [showMore, setShowMore] = useState(false);

  // คำนวณข้อมูลที่จะแสดงผล
  const filteredSkills = SKILLS_DATA.filter(skill => skill.category === activeFilter);
  const displayedSkills = showMore ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Navbar />

      {/*Mian Menu*/}
      <main id="about" className="max-w-7xl mx-auto px-6 py-12 lg:py-24 scroll-mt-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* My pics */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md mt-6 lg:mt-0 order-1 lg:order-none">
            <div className="absolute -inset-3 lg:-inset-4 bg-rose-50 rounded-3xl -z-10"></div>
            
            <img 
              src="profile.png" 
              alt="Profile" 
              className="w-full h-auto aspect-[4/5] object-cover rounded-2xl shadow-sm"
            />

            {/* ป้ายวงกลม ปรับขนาดให้เล็กลงนิดหน่อยบนมือถือ */}
            <div className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 w-28 h-28 lg:w-32 lg:h-32 bg-rose-900 rounded-full flex flex-col items-center justify-center text-white shadow-xl">
              <span className="text-xl lg:text-2xl font-bold">100+</span>
              <span className="text-[10px] lg:text-xs font-semibold tracking-wider uppercase mt-1">Commits</span>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-none text-center lg:text-left mt-8 lg:mt-0">
            {/* <h3 className="text-rose-600 font-bold tracking-widest text-xs lg:text-sm uppercase mb-3 lg:mb-4">
              Meet The Developer
            </h3> */}
            
            {/* ปรับขนาดฟอนต์ให้พอดีกับมือถือ (text-4xl) และคอม (lg:text-6xl) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 lg:mb-6 tracking-tight">
              <span className="block">Hi I'm Penguin</span>
              <span className="block text-rose-900 md:text-4xl lg:text-5xl">Phiraphat Thiangthit</span>
            </h1>

            {/* Job position */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <span className="px-5 py-2 bg-rose-50 text-rose-700 text-[13px] font-black tracking-wider border border-rose-100 rounded-full">
                Software Developer
              </span>
              <span className="px-5 py-2 bg-rose-50 text-rose-700 text-[13px] font-black tracking-wider border border-rose-100 rounded-full">
                IT Support
              </span>
            </div>

            <p className="text-slate-600 text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed">
              Computer Engineering graduate with hands-on experience in Full-stack Development and DevOps. Proven track record in building end-to-end applications to deploying production environments using Docker. Decisive developer focused on system scalability, demonstrated by migrating databases for performance and implementing token-based security. Committed to writing high-quality code through technical feedback and continuous system optimization.
            </p>

            {/* Stat */}
            <div className="flex justify-center lg:justify-start gap-8 lg:gap-12 mb-8 lg:mb-10 border-t border-slate-200 pt-6 lg:pt-8">
              <div>
                <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">5+</h4>
                <p className="text-[10px] lg:text-xs text-slate-500 font-semibold tracking-wider uppercase">Projects</p>
              </div>
              <div>
                <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">3</h4>
                <p className="text-[10px] lg:text-xs text-slate-500 font-semibold tracking-wider uppercase">Tech Stacks</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 lg:gap-4">
              
              {/* resume */}
              <a 
                href="/resume_phiraphat.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-rose-900 text-white font-semibold rounded-full hover:bg-rose-800 transition shadow-md w-full sm:w-auto text-center"
              >
                View Resume
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-transparent border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-slate-400 hover:text-slate-900 transition w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
              
            </div>
          </div>

        </div>
      </main>

      {/* Section: Skills */}
      <section id="skills" className="py-24 bg-[#F8F9FC] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Header ส่วนบน */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
              I leverage a diverse toolkit to bring complex visions to life, focusing on performance, accessibility, and aesthetic excellence.
            </p>
            
            {/* ปุ่ม Filter หมวดหมู่ */}
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => { setActiveFilter('PROGRAMMING'); setShowMore(false); }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === 'PROGRAMMING' 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                Programming
              </button>
              <button 
                onClick={() => { setActiveFilter('UX/UI'); setShowMore(false); }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === 'UX/UI' 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                UX/UI
              </button>
            </div>
          </div>

          {/* Grid*/}

          {/* Fade Up */}
          <style>{`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(15px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up {
              animation: fadeUp 0.4s ease-out forwards;
            }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* ไอคอนจัดชิดซ้าย */}
                <div className="w-9 h-9 text-slate-800 mb-5 animate-fade-up">
                  {skill.icon}
                </div>
                
                {/* ชื่อเทคโนโลยีและคำอธิบาย */}
                <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">{skill.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* ปุ่ม MORE */}
          {filteredSkills.length > 6 && !showMore && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowMore(true)}
                className="px-8 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-full hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
              >
                Show More
              </button>
            </div>
          )}
          
        </div>
      </section>

      {/* Section:  */}
      <section id="projects" className="py-24 bg-[#F4F7FC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header ด้านบน แบ่งซ้าย-ขวา */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h4 className="text-rose-600 font-bold tracking-widest text-xs uppercase mb-3">
                Selected Projects
              </h4>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed md:text-right">
              A collection of work focused on digital branding, UI/UX systems, and high-performance development.
            </p>
          </div>

          {/* แสดงการ์ดผลงาน (แบ่งเป็น 2 คอลัมน์บนจอใหญ่) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {EXPERIENCES_DATA.map((project) => (
              <ExperienceCard key={project.id} data={project} />
            ))}
          </div>

        </div>
      </section>

      {/* Section: */}
      <section id="experience" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header ด้านบน */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h4 className="text-rose-600 font-bold tracking-widest text-xs uppercase mb-3">
                Events & Activities
              </h4>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Experience
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed md:text-right">
              A showcase of my participation in fast-paced development events, demonstrating teamwork, adaptability, and rapid prototyping skills under pressure.
            </p>
          </div>

          {/* แสดงการ์ดผลงานแบบเรียงลงมาทีละอัน */}
          <div className="flex flex-col">
            {WORKS_DATA.map((work) => (
              <WorkCard key={work.id} data={work} />
            ))}
          </div>

        </div>
      </section>

      {/* Section: Journey & Certifications */}
      <section id="journey" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
            Professional Journey
          </h2>

          {/* ไทม์ไลน์ (Timeline) */}
          <div className="ml-3 md:ml-0">
            {JOURNEY_DATA.map((item, index) => (
              // เส้นแนวตั้งด้านซ้าย (ลบเส้นออกถ้าเป็นอันสุดท้าย)
              <div key={item.id} className={`relative pl-8 md:pl-10 pb-12 ${index === JOURNEY_DATA.length - 1 ? '' : 'border-l-2 border-rose-100'}`}>
                
                {/* จุดวงกลม (Dot) */}
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-rose-600 rounded-full border-[3px] border-white shadow-sm"></div>
                
                {/* เนื้อหาในแต่ละจุด */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider rounded-full w-fit">
                    {item.years}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                </div>
                
                <h4 className="text-sm font-bold text-slate-700 mb-3">{item.organization}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* กล่อง Certifications */}
          <div className="mt-8 bg-[#F4F7FC] p-8 md:p-12 rounded-3xl">
            
            {/* Header กล่อง */}
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              <h3 className="text-2xl font-extrabold text-slate-900">Certifications</h3>
            </div>

            {/* Grid แสดงใบเซอร์ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center text-rose-400">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] leading-tight mb-1">{cert.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.issued}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ปุ่มดาวน์โหลด CV */}
            <div className="mt-10 flex justify-center">
              <a 
                href="/Resume_P.pdf" 
                target="_blank"
                className="px-8 py-3 border-2 border-rose-200 text-rose-700 font-bold text-sm rounded-full hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
              >
                Download CV / PDF
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Contact & Footer */}
      <footer id="contact" className="w-full mt-24">
        
        {/* เปลี่ยนพื้นหลังเป็นสีแดงเข้ม (red-900) */}
        <div className="bg-[#7f1d1d] py-28 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Let's build something <span className="text-[#fca5a5]">remarkable.</span>
          </h2>
          <p className="text-red-100 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-10 opacity-90">
            I'm currently looking for opportunities in Software Development and IoT. Feel free to reach out to discuss projects or job roles.
          </p>
          
          <a 
            href="mailto:your.email@example.com" 
            className="inline-block px-10 py-4 bg-white text-[#7f1d1d] font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            hello@your-email.com
          </a>
        </div>

        {/* ส่วน Footer ลิงก์ */}
        <div className="bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
            
            <div className="text-center md:text-left">
              <div className="text-xl font-black text-slate-900 tracking-tight mb-3">
                Portfolio.
              </div>
              <p className="text-[13px] font-semibold text-slate-500">
                © 2026 P. All rights reserved.
              </p>
            </div>

            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-[13px] font-bold text-slate-600">
              <li><a href="https://www.linkedin.com/in/phiraphat-thiangthit/" className="hover:text-[#7f1d1d] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#7f1d1d] transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-[#7f1d1d] transition-colors">Medium</a></li>
              <li><a href="#" className="hover:text-[#7f1d1d] transition-colors">Instagram</a></li>
            </ul>

          </div>
        </div>
      </footer>

    </div>
  );
}