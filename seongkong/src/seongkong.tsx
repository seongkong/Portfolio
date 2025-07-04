import React from 'react';

function Seongkong() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">포트폴리오</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#education" className="hover:text-blue-500">Education</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 space-y-24">
        
        {/* About */}
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4">🙋‍♂️ About Me</h2>
          <p className="mb-2">Undergraduate studying Computer Science, passionate about web technologies.</p>
          <p className="mb-2">Front-End focused | Love building clean, responsive interfaces with React & TypeScript.</p>
          <p className="mb-2">On a journey to become a well-rounded Full-Stack developer by learning backend systems.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">📈 On My Learning Path</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Creating dynamic UIs with React, Zustand, and Tailwind CSS</li>
            <li>Learning backend basics with Node.js, Express, and MongoDB</li>
            <li>Building personal projects to connect front-end and back-end seamlessly</li>
          </ul>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>한남대학교 린튼글로벌비즈니스학과 (2019.03 ~ 2022.08) | Completed 4 semesters</li>
            <li>한동대학교 전산전자공학부 (2023.03 ~ 2026.02 예정) | Computer Science Major</li>
          </ul>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-2xl font-semibold mb-4">🛠 Skills</h2>
          <p className="mb-2">C, C++, Dart, Python, JavaScript, TypeScript, Swift, HTML5, CSS3, React, Flutter</p>
          <p className="mb-2">MySQL, Docker, Netlify, Vercel, GitHub</p>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">💻 Projects</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">📅 2024.06.24 ~ 2024.07.13 | Hanmadi</p>
              <p>'Hanmadi': 지역개발사업에 대한 의견을 전달할 수 있도록, 용기를 주는 커뮤니티 서비스, 한마디 💭</p>
              <p className="text-sm text-gray-600">Development Tools: React, Firebase</p>
            </div>
            <div>
              <p className="font-semibold">📅 2024.08.06 ~ Present | Root</p>
              <p>'Root': 앱, 웹 콘텐츠를 저장하고 분류해두는 북마크 관리 서비스, RooT!</p>
              <p className="text-sm text-gray-600">Development Tools: Flutter, Dart, Swift, Kotlin</p>
            </div>
            <div>
              <p className="font-semibold">📅 2024.10.23 ~ 2025.05.20 | SCRD</p>
              <p>'SCRD': 웹스크래핑 기반 방탈출 통합 예약/동행 매칭 서비스</p>
              <p className="text-sm text-gray-600">Development Tools: React, Netlify</p>
            </div>
            <div>
              <p className="font-semibold">📅 2024.03.02 ~ Present | Capstone Project</p>
              <p>Computer Vision을 활용한 축구 데이터 추출 및 분석</p>
              <p className="text-sm text-gray-600">Development Tools: Pytorch, CV</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-500">
        © 2025. All rights reserved.
      </footer>
    </div>
  );
}

export default Seongkong;