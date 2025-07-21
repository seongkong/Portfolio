import React, { useEffect, useRef, useState } from 'react';
import banner from './assets/banner.avif';
import birthdate from './assets/birthdate.svg';
import education from './assets/education.svg';
import email from './assets/email.svg';
import location from './assets/location.svg';
import name from './assets/name.svg';
import phone from './assets/phone.svg';
import { FiLink } from "react-icons/fi";

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

      <section className="bg-white py-12 text-center text-black">
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-4xl font-extrabold tracking-wide">
            <span className="text-gray-500">
              <FiLink className="text-4xl text-gray-500" />
            </span>
            <h2>ABOUT ME</h2>
          </div>
        </div>

        {/* 정보 영역 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 max-w-5xl mx-auto text-sm md:text-base">
          {/* 이름 */}  
          <div className="flex items-center space-x-4">
            <img src={name} alt="이름" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium">이름</p>
              <p>임성빈</p>
            </div>
          </div>

          {/* 생년월일 */}
          <div className="flex items-center space-x-4">
            <img src={birthdate} alt="생년월일" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium">생년월일</p>
              <p>00.05.06</p>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex items-center space-x-4">
            <img src={location} alt="위치" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium">위치</p>
              <p>충청남도 천안시</p>
            </div>
          </div>

          {/* 연락처 */}
          <div className="flex items-center space-x-4">
            <img src={phone} alt="연락처" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium">연락처</p>
              <p>010-6311-4704</p>
            </div>
          </div>

          {/* 이메일 */}
          <div className="flex items-center space-x-4">
            <img src={email} alt="이메일" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium">이메일</p>
              <p>bins506@gmail.com</p>
            </div>
          </div>

          {/* 학력 */}
          <div className="flex items-center space-x-4">
            <img src={education} alt="학력" className="w-6 h-6" />
            <div className="text-left">
              <p className="font-medium whitespace-nowrap">학력</p>
              <p className="whitespace-nowrap">한동대학교 (전산전자공학부 23.03 ~)</p>
              <p className="whitespace-nowrap">한남대학교 (린튼 글로벌 비즈니스 19.03 ~ 22.06)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS 섹션 */}
      <section id="skills" className="py-12 text-center text-black" style={{ backgroundColor: '#f9c51d' }}>
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-4xl font-extrabold tracking-wide">
            <span className="text-gray-700">
              <FiLink className="text-4xl text-gray-700" />
            </span>
            <h2>SKILLS</h2>
          </div>
        </div>

        {/* 스킬 내용 영역 (예시) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-black px-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>React, Next.js</li>
              <li>TypeScript, JavaScript</li>
              <li>Tailwind CSS, Styled-components</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Backend</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Node.js (Express)</li>
              <li>Firebase, Supabase</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Tools & Etc</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Git, GitHub</li>
              <li>Figma</li>
              <li>Jira, Notion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <main ref={mainRef} className="flex-grow max-w-5xl mx-auto px-4 py-10 pt-28 space-y-24 text-black">
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-500">
        © 2025. All rights reserved.
      </footer>
    </div>
  );
}

export default Seongkong;