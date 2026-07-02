import React from "react";
// Skill
export const SKILLS_DATA = [
  {
    id: 1,
    category: 'PROGRAMMING',
    title: 'Python',
    desc: 'Primary language for Backend development, automation, and AI applications.',
    icon: <i className="devicon-python-plain colored text-3xl"></i>
  },
  {
    id: 2,
    category: 'PROGRAMMING',
    title: 'Dart',
    desc: 'Cross-platform mobile application development with Flutter.',
    icon: <i className="devicon-dart-plain colored text-3xl"></i>
  },
  {
    id: 3,
    category: 'PROGRAMMING',
    title: 'TypeScript',
    desc: 'Developing modern web applications with React and Next.js.',
    icon: <i className="devicon-typescript-plain colored text-3xl"></i>
  },
  {
    id: 4,
    category: 'FRAMEWORKS',
    title: 'NEXT.JS',
    desc: 'Building responsive web applications and portfolio websites.',
    icon: <i className="devicon-nextjs-plain colored text-4xl"></i>
  },
  {
    id: 5,
    category: 'FRAMEWORKS',
    title: 'FastAPI',
    desc: 'Developing RESTful APIs and scalable backend services.',
    icon: <i className="devicon-fastapi-plain colored text-4xl"></i>
  },
  {
    id: 6,
    category: 'FRAMEWORKS',
    title: 'Flutter',
    desc: 'Developing cross-platform mobile applications with modern UI.',
    icon: <i className="devicon-flutter-plain colored text-4xl"></i>
  },
  {
    id: 7,
    category: 'FRAMEWORKS',
    title: 'React',
    desc: 'Creating interactive and reusable user interfaces.',
    icon: <i className="devicon-react-original colored text-4xl"></i>
  },
  {
    id: 8,
    category: 'FRAMEWORKS',
    title: 'Tailwind CSS',
    desc: 'Building responsive and modern user interfaces efficiently.',
    icon: <i className="devicon-tailwindcss-original colored text-4xl"></i>
  },
  {
    id: 9,
    category: 'DATABASE',
    title: 'PostgreSQL',
    desc: 'Database design, migration, and performance optimization.',
    icon: <i className="devicon-postgresql-plain colored text-4xl"></i>
  },
  {
    id: 10,
    category: 'DATABASE',
    title: 'MongoDB',
    desc: 'Working with NoSQL databases for scalable applications.',
    icon: <i className="devicon-mongodb-plain colored text-4xl"></i>
  },
  {
    id: 11,
    category: 'TOOLS',
    title: 'Docker',
    desc: 'Containerizing and deploying applications on Ubuntu servers.',
    icon: <i className="devicon-docker-plain colored text-4xl"></i>
  },
  {
    id: 12,
    category: 'TOOLS',
    title: 'Git',
    desc: 'Version control and collaborative software development.',
    icon: <i className="devicon-git-plain colored text-4xl"></i>
  },
  {
    id: 13,
    category: 'TOOLS',
    title: 'GitHub',
    desc: 'Managing repositories and team collaboration workflows.',
    icon: <i className="devicon-github-plain colored text-4xl"></i>
  }
];

// Project
export const EXPERIENCES_DATA = [
  {
    id: 1,
    category: 'Machine Learning • 2026',
    title: 'Banana Split App',
    techStack: ['Flutter', 'Python', 'YOLO', 'Computer Vision'],
    description: 'Mobile application for banana cultivar classification, developed using Flutter and the YOLO object detection architecture. The application enables real-time identification and classification of banana varieties through image-based analysis, enhancing accuracy and efficiency in agricultural data collection.',
    duration: '2 Months',
    teamSize: '2 Members',
    images: [
      '/Project/project1.png',
      '/Project/project2.png',
    ]
  },
  {
    id: 2,
    category: 'Game Development • 2026',
    title: 'Soul Melt : 2D Action Roguelike Game',
    techStack: ['Unity', 'C#', 'Logic Design'],
    description: 'A fast-paced 2D Top-Down Roguelike developed for a Game Jam under the theme "Refresh". The game features a 10-floor progressive dungeon with dynamic difficulty scaling, a fruit-based stat upgrade system, and a punishing time-debt mechanic. Key technical highlights include a custom Cinemachine multi-target camera for boss encounters, real-time UI data binding, and cross-platform deployment on itch.io.',
    duration: '7 Days', 
    teamSize: 'Solo Developer',
    images: [
      '/Project/soulmalt3.png',
      '/Project/soulmalt1.png',
      '/Project/soulmalt2.png'
    ]
  },
  {
    id: 3,
    category: 'Robot • 2024',
    title: 'Arduino Black Line Follower Robot',
    techStack: ['Arduino', 'Circuit'],
    description: 'Designed and built an Arduino-based line-following robot capable of autonomously navigating a track by following a black line. The project involved programming the Arduino microcontroller to process input from infrared sensors, enabling the robot to adjust its movement in real-time to stay on course. The robot successfully completed the track with high accuracy, demonstrating effective sensor integration and control logic.',
    duration: '2 Weeks', 
    teamSize: '5 Members',
    images: [
      '/Project/robot1.png',
      '/Project/robot2.png',
    ]
  },
  {
    id: 4,
    category: 'Dashboard • 2024',
    title: 'Dashboard Company',
    techStack: ['Python', 'HTML/CSS', 'JavaScript','sqlite'],
    description: 'Developed a web-based dashboard application for data visualization and business reporting. The system retrieves and processes data from an SQLite database, presenting key metrics and insights through interactive charts and summary panels to support decision-making.',
    duration: '1 Weeks', 
    teamSize: '2 Members',
    images: [
      '/Project/database1.png',
      '/Project/database2.png',
      '/Project/database3.png',
    ]
  },
  {
    id: 5,
    category: 'Program • 2024',
    title: 'Stock web',
    techStack: ['Djungo', 'HTML/CSS', 'JavaScript','sqlite'],
    description: 'Developed a web-based stock management system using Django for backend development and SQLite for database management. The application features user authentication, inventory tracking, and real-time data visualization to streamline stock control processes.',
    duration: '2 Weeks', 
    teamSize: '4 Members',
    images: [
      '/Project/store1.png',
      '/Project/store2.png',
    ]
  },
  // {
  //   id: 6,
  //   category: 'Game Development • 2022',
  //   title: 'Samurai vs Ninja game : Fighting game',
  //   techStack: ['Python', 'Pygame'],
  //   description: 'A 2D fighting game developed using Python and the Pygame library. The game features two playable characters, a samurai and a ninja, each with unique abilities and attack patterns. Players can engage in fast-paced combat, utilizing a variety of moves and combos to defeat their opponent in a dynamic arena setting.',
  //   duration: '2 Weeks', 
  //   teamSize: '2 Members',
  //   images: [
  //   ]
  // }
];

// Experience
export const WORKS_DATA = [
  {
    id: 1,
    category: 'Hackathon • 2024',
    title: 'Full-Stack Developer,UX/UI : NU Hackathon & Pitching Participant',
    description: (
      <>
        - Developed a web application and dashboard for test data visualization.<br />
        - Designed UX/UI for an intuitive and user-friendly experience.<br />
        - Collaborated with the team to deliver a functional MVP within 48 hours.
      </>
    ),
    images: [
      '/hackathon.jpg'
    ]
  },
  {
    id: 2,
    category: 'Intern • 2026',
    title: 'Backend Developer Internship : Botnoi Consulting',
    description: (
      <>
        - Designed and developed RESTful APIs for data management systems.<br />
        - Improved the medical staff rostering Web Admin by synchronizing Frontend and Backend.<br />
        - Built a backend module to convert Excel data into image formats automatically.
      </>
    ),
    images: [
      'Experience/Botnoi1.png',
      'Experience/Botnoi2.png'
    ]
  },
  {
    id: 3,
    category: 'Staff • 2025',
    title: 'Event Staff : Thailand Game Show 2025',
    description: (
      <>
        - Introduced game features to attendees and guided gameplay demonstrations.<br />
        - Assisted visitors and provided event support.<br />
        - Collaborated with the team to manage booth activities efficiently.
      </>
    ),
    images: [
      'Experience/tgs1.jpg',
      'Experience/tgs2.jpg'
    ]
  },
  {
    id: 4,
    category: 'Pitching • 2024',
    title: 'Pitching P1 Startup Competition',
    description: (
      <>
        - Presented project ideas to judges and audiences in a startup pitching competition.<br />
        - Demonstrated the product concept, technical implementation, and business value.<br />
        - Strengthened presentation, teamwork, and communication skills.
      </>
    ),
    images: [
      'Experience/Pitching1.png',
      'Experience/Pitching2.png',
      'Experience/Pitching3.png'
    ]
  },
  {
    id: 5,
    category: 'Intern • 2023',
    title: 'Backend Developer Internship : Graduate School, Naresuan University',
    description: (
      <>
        - Deployed production servers on Ubuntu using Docker and Docker Compose.<br />
        - Migrated legacy SQLite databases to PostgreSQL for improved performance.<br />
        - Developed a secure PDF viewing platform with URL Token authentication.
      </>
    ),
    images: [
      'Experience/nu1.jpg',
      'Experience/nu2.jpg',
    ]
  }
];

export const JOURNEY_DATA = [
  {
    id: 1,
    years: '2022 — 2026',
    role: 'Bachelor of Engineering in Computer Engineering',
    organization: 'Naresuan University • Phitsanulok',
    description: '3.13 GPAX'
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Google AI Essentials',
    issued: 'ISSUED September 2024',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    id: 2,
    title: 'Google Cybersecurity',
    issued: 'ISSUED August 2024',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  }
];