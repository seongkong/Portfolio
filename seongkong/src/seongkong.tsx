import React, { useEffect, useRef, useState } from 'react';
import banner from './assets/banner.avif';

function Seongkong() {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToMain = () => {
    const headerHeight = 60;
    if (mainRef.current) {
      const top = mainRef.current.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px 넘으면 헤더 색상 변경
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-kbo text-grey-800 min-h-screen relative">
      
      {/* 배너 영역 */}
      <div className="relative h-[550px]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(112, 93, 80, 0.8) 0%, rgba(112, 93, 80, 0.8) 90%), url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white'>
          <h2 className='text-4xl font-bold mb-4'>-임성빈-</h2>
          <h2 className='text-4xl font-bold mb-4'>프론트 엔드 개발자 포트폴리오</h2>

          <div style={{ backgroundColor: '#f4623a' }} className="w-12 h-[2px] my-4"></div>

          <p className='text-lg font-light text-center leading-relaxed'>
            안녕하세요.<br />
            본질에 집중하는 프론트 엔드 개발자<br />
            임성빈 입니다.
          </p>

          <button
            onClick={scrollToMain}
            className='inline-block px-8 py-4 text-white mt-10'
            style={{
              backgroundColor: '#f4623a',
              borderRadius: '10rem',
              transition: 'background-color 0.2s ease-in-out',
            }}
          >
            더 알아보기 ↓
          </button>
        </div>
      </div>

      {/* 헤더 */}
      <header className={`fixed top-0 left-0 right-0 z-30 py-4 transition-colors duration-300
        ${isScrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'}
      `}>
        <div className="flex justify-center items-center">
          <div className="text-xl font-bold">Soengkong's Portfolio</div>

          <div className="mx-[250px]"></div>

          <div className="flex space-x-6">
            <span onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-300">About Me</span>
            <span onClick={() => scrollToSection('education')} className="cursor-pointer hover:text-blue-300">Education</span>
            <span onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-blue-300">Skills</span>
            <span onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-blue-300">Projects</span>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main ref={mainRef} className="flex-grow max-w-5xl mx-auto px-4 py-10 pt-28 space-y-24 text-black">
        
        {/* About */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-2xl font-medium mb-4">🙋‍♂️ About Me</h2>
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