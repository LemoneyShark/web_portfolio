import React from "react";
// Skill
export const SKILLS_DATA = [
  { 
    id: 1, 
    category: 'PROGRAMMING', 
    title: 'PYTHON', 
    desc: 'ใช้บ่อยเป็นภาษาหลัก (ML, YOLO)', 
    icon: <i className="devicon-python-plain colored text-4xl"></i>
  },
  { 
    id: 2,
    category: 'PROGRAMMING',
    title: 'FLUTTER',
    desc: 'พัฒนา Mobile App', 
    icon: <i className="devicon-flutter-plain colored text-4xl"></i>
  },
  { 
    id: 3,
    category: 'PROGRAMMING',
    title: 'NEXT.JS',
    desc: 'พัฒนา Web Frontend', 
    icon: <i className="devicon-nextjs-plain colored text-4xl"></i>
  },
  { 
    id: 4, category: 'PROGRAMMING', title: 'TAILWIND', desc: 'จัดการ UI / CSS', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#06B6D4]">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    )
  },
  { 
    id: 5, category: 'PROGRAMMING', title: 'UNITY', desc: 'พัฒนาเกม (Game Jam)', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black">
        <path d="M18.8 8.4l-4.5-2.7c-.5-.3-1.1-.3-1.6 0L8.2 8.4c-.5.3-.8.8-.8 1.4v5.4c0 .6.3 1.1.8 1.4l4.5 2.7c.5.3 1.1.3 1.6 0l4.5-2.7c.5-.3.8-.8.8-1.4v-5.4c0-.6-.3-1.1-.8-1.4zM12 16.2l-3.3-2 3.3-2 3.3 2-3.3 2zm4.5-5.3L13 13.1V9l3.5-2.1v4zM7.5 10.9l3.5 2.1v4.1l-3.5-2.1v-4z"/>
      </svg>
    )
  },
  { 
    id: 6, category: 'PROGRAMMING', title: 'C#', desc: 'เขียนสคริปต์เกม', 
    icon: (
      <div className="text-3xl font-black text-[#239120]">C#</div>
    )
  },
  { 
    id: 7, category: 'PROGRAMMING', title: 'SQL', desc: 'จัดการฐานข้อมูล', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-slate-800">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  { 
    id: 8, category: 'UX/UI', title: 'FIGMA', desc: 'ออกแบบหน้าจอหลัก', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#F24E1E]">
        <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-8-4a4 4 0 110-8h4v8H8zm8-4a4 4 0 110 8h-4V4h4zm-4 12a4 4 0 11-8 0v-4h4v4zm-4 4a4 4 0 108 0v-4H8v4z"/>
      </svg>
    )
  },
  { 
    id: 9, category: 'UX/UI', title: 'PROTOTYPE', desc: 'ทำ Mockup นำเสนอ', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-indigo-600">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
];

// Experience
export const EXPERIENCES_DATA = [
  {
    id: 1,
    category: 'Machine Learning • 2026',
    title: 'Banana Split App',
    techStack: ['Flutter', 'Python', 'YOLO', 'Computer Vision'],
    description: 'แอปพลิเคชันมือถือสำหรับคัดแยกสายพันธุ์กล้วย พัฒนาด้วย Flutter และใช้ YOLO architecture สำหรับการตรวจจับวัตถุ',
    duration: '4 Months', // ระยะเวลาทำโปรเจกต์
    teamSize: '3 Members', // จำนวนสมาชิกในทีม
    images: [
      'profile.png',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 2,
    category: 'Game Development • 2026',
    title: 'Soul Melt',
    techStack: ['Unity', 'C#', 'Logic Design'],
    description: 'โปรโตไทป์เกมการ์ดแนววางแผนที่พัฒนาใน 7-day Game Jam ออกแบบระบบ Logic Flow และ UI ภายในเกม',
    duration: '7 Days', 
    teamSize: 'Solo Developer',
    images: [
      'soulmalt3.png',
      'soulmalt1.png',
      'soulmalt2.png'
    ]
  }
];

export const WORKS_DATA = [
  {
    id: 1,
    category: 'Hackathon • 2024',
    title: 'NU Hackathon & Pitching Participant',
    description: 'เข้าร่วมการแข่งขันพัฒนาระบบ IoT ภายใน 48 ชั่วโมง โดยรับหน้าที่เป็น Full-stack Developer พัฒนา Dashboard สำหรับมอนิเตอร์ข้อมูลเซ็นเซอร์แบบ Real-time และนำเสนอต่อหน้าคณะกรรมการ',
    images: [
      '/hackathon.jpg'
    ]
  },
  {
    id: 2,
    category: 'Game Jam • 2026',
    title: 'Thailand Summer Jam 2026',
    description: 'แข่งขันสร้างเกมภายใน 7 วัน ร่วมกับทีมพัฒนาเกมการ์ดแนววางแผน รับผิดชอบในส่วนของการเขียนสคริปต์ C# บน Unity และออกแบบระบบ Logic Flow',
    images: [
      'Phiraphat_TSJ2026.png'
    ]
  },
  {
    id: 3,
    category: 'Intern • 2026',
    title: 'Internship : Botnoi Consulting',
    description: 'แข่งขันสร้างเกมภายใน 7 วัน ร่วมกับทีมพัฒนาเกมการ์ดแนววางแผน รับผิดชอบในส่วนของการเขียนสคริปต์ C# บน Unity และออกแบบระบบ Logic Flow',
    images: [
      'Phiraphat_TSJ2026.png'
    ]
  },
  {
    id: 4,
    category: 'Staff • 2025',
    title: 'Event Staff : Thailand Game Show 2025',
    description: 'แข่งขันสร้างเกมภายใน 7 วัน ร่วมกับทีมพัฒนาเกมการ์ดแนววางแผน รับผิดชอบในส่วนของการเขียนสคริปต์ C# บน Unity และออกแบบระบบ Logic Flow',
    images: [
      '73310.jpg',
      '73312_0.jpg'
    ]
  }
];

export const JOURNEY_DATA = [
  {
    id: 1,
    years: '2025 — 2026',
    role: 'Software Developer Intern',
    organization: 'Tech Company Name • Bangkok',
    description: 'ฝึกงานในตำแหน่ง Full-stack Developer รับผิดชอบการพัฒนาฟีเจอร์ใหม่ให้กับ Web Application ด้วย Next.js และทำงานร่วมกับทีมผ่านระบบ Agile'
  },
  {
    id: 2,
    years: '2022 — 2026',
    role: 'B.Eng. in Computer Engineering',
    organization: 'University Name • Location',
    description: 'สำเร็จการศึกษาปริญญาตรีวิศวกรรมคอมพิวเตอร์ ทำโปรเจกต์จบ (Senior Project) เกี่ยวกับการประยุกต์ใช้ Machine Learning (YOLO) สำหรับการคัดแยกวัตถุ'
  },
  {
    id: 3,
    years: '2019 — 2022',
    role: 'High School (Science-Math)',
    organization: 'High School Name • Location',
    description: 'ศึกษาแผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ เริ่มต้นความสนใจด้านการเขียนโปรแกรมและการพัฒนาเกมเบื้องต้น'
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issued: 'ISSUED MAR 2026',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional',
    issued: 'ISSUED DEC 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    id: 3,
    title: 'EF SET English Certificate (C1)',
    issued: 'ISSUED OCT 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
    )
  }
];