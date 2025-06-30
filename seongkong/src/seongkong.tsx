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
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>자기소개 내용 들어갈 자리입니다.</p>
        </section>

        <section id="education">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>학교 및 학업 정보 내용입니다.</p>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p>기술 스택 내용입니다.</p>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p>프로젝트 설명 내용입니다.</p>
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