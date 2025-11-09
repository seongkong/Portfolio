import React, { useEffect, useRef, useState } from 'react';
import banner from './assets/banner.avif';
import birthdate from './assets/birthdate.svg';
import education from './assets/education.svg';
import email from './assets/email.svg';
import location from './assets/location.svg';
import name from './assets/name.svg';
import phone from './assets/phone.svg';
import language from './assets/language.svg';
import frontend from './assets/frontend.svg';
import backend from './assets/backend.svg';
import DevOps from './assets/DevOps.svg';
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
          <h2 className='text-4xl font-bold mb-4'>개발자 포트폴리오</h2>

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
            <span onClick={() => scrollToSection('education')} className="cursor-pointer hover:text-blue-300">Skills</span>
            <span onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-blue-300">Archiving</span>
            <span onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-blue-300">Projects</span>
          </div>
        </div>
      </header>

      <section ref={mainRef} className="bg-white py-24 text-center text-black">
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-4xl font-extrabold tracking-wide">
            <FiLink className="text-4xl text-gray-500" />
            <div className="relative">
              <span className="z-10 relative">ABOUT ME</span>
              <div className="absolute bottom-[-15px] left-0 w-full h-[1px] bg-gray-300" />
            </div>
          </div>
        </div>

        {/* 정보 영역 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 max-w-5xl mx-auto text-sm md:text-base">
          {/* 이름 */}  
          <div className="flex items-center space-x-6">
            <img src={name} alt="이름" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium">이름</p>
              <p>임성빈</p>
            </div>
          </div>

          {/* 생년월일 */}
          <div className="flex items-center space-x-6">
            <img src={birthdate} alt="생년월일" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium">생년월일</p>
              <p>00.05.06</p>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex items-center space-x-6">
            <img src={location} alt="위치" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium">위치</p>
              <p>충청남도 천안시</p>
            </div>
          </div>

          {/* 연락처 */}
          <div className="flex items-center space-x-6">
            <img src={phone} alt="연락처" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium">연락처</p>
              <p>010-6311-4704</p>
            </div>
          </div>

          {/* 이메일 */}
          <div className="flex items-center space-x-6">
            <img src={email} alt="이메일" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium">이메일</p>
              <p>bins506@gmail.com</p>
            </div>
          </div>

          {/* 학력 */}
          <div className="flex items-center space-x-6">
            <img src={education} alt="학력" className="w-8 h-8" />
            <div className="text-left">
              <p className="font-medium whitespace-nowrap">학력</p>
              <p className="whitespace-nowrap">한동대학교 (전산전자공학부 23.03 ~)</p>
              <p className="whitespace-nowrap">한남대학교 (린튼 글로벌 비즈니스 19.03 ~ 22.06)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS 섹션 */}
      <section id="skills" className="py-16 text-black" style={{ backgroundColor: '#f9c51d' }}>
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-4xl font-extrabold tracking-wide">
            <FiLink className="text-4xl text-gray-500" />
            <div className="relative">
              <span className="z-10 relative">SKILLS</span>
              <div className="absolute bottom-[-15px] left-0 w-full h-[1px] bg-black" />
            </div>
          </div>
        </div>

        {/* Skill 리스트 */}
        <div className="max-w-6xl mx-auto bg-[#fdf3d6] rounded-3xl shadow-xl p-10 space-y-6">
          
          {/* Language */}
          <div className="flex items-center space-x-4">
            <img src={language} alt="language" className="w-8 h-8" />
            <h3 className="text-lg font-bold w-32">Language</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-700 text-white px-2 py-1 rounded">C</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded">C++</span>
              <span className="bg-blue-400 text-white px-2 py-1 rounded">Dart</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded">Python</span>
              <span className="bg-yellow-300 text-black px-2 py-1 rounded">JavaScript</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded">TypeScript</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded">Swift</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="flex items-center space-x-4">
            <img src={frontend} alt="frontend" className="w-8 h-8" />
            <h3 className="text-lg font-bold w-32">Frontend</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-orange-600 text-white px-2 py-1 rounded">HTML5</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded">CSS3</span>
              <span className="bg-sky-600 text-white px-2 py-1 rounded">React</span>
              <span className="bg-blue-400 text-white px-2 py-1 rounded">Flutter</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded">Recoil</span>
              <span className="bg-rose-500 text-white px-2 py-1 rounded">React-Query</span>
              <span className="bg-sky-400 text-white px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded">Styled-Components</span>
            </div>
          </div>

          {/* Backend */}
          <div className="flex items-center space-x-4">
            <img src={backend} alt="backend" className="w-8 h-8" />
            <h3 className="text-lg font-bold w-32">Backend</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-green-700 text-white px-2 py-1 rounded">MySQL</span>
              <span className="bg-lime-600 text-white px-2 py-1 rounded">Node.js</span>
            </div>
          </div>

          {/* DevOps */}
          <div className="flex items-center space-x-4">
            <img src={DevOps} alt="DevOps" className="w-8 h-8" />
            <h3 className="text-lg font-bold w-32">DevOps</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">Docker</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded">Netlify</span>
              <span className="bg-black text-white px-2 py-1 rounded">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVING 섹션 */}
      <section id="archiving" className="py-20 text-white" style={{ backgroundColor: '#222' }}>
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-3 text-4xl font-extrabold tracking-wide">
            <FiLink className="text-4xl text-white" />
            <div className="relative">
              <span className='z-10 relative'>ARCHIVING</span>
              <div className='absolute bottom-[-15px] left-0 w-full h-[1px] bg-white' />
            </div>
          </div>
        </div>

        {/* 카드 컨테이너 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-4xl mx-auto px-4">
          {/* GitHub 카드 */}
          <div className="bg-gray-100 rounded-2xl p-6 w-full md:w-1/2 shadow-md text-black">
            <div className="flex items-center mb-4 space-x-3">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-8 h-8" />
              <h3 className="text-xl font-bold">GitHub</h3>
            </div>
            <a href="https://github.com/seongkong" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block mb-2">
              github.com/seongkong
            </a>
            <p className="text-sm text-gray-700">소스 코드 저장소</p>
          </div>
        </div>
      </section>

      {/* PROJECTS 섹션 */}
      <section id="projects" className="bg-white py-20 text-black">
        {/* 제목 영역 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-3 text-4xl font-extrabold tracking-wide">
            <FiLink className="text-4xl text-black" />
            <div className="relative">
              <span className="z-10 relative">PROJECTS</span>
              <div className="absolute bottom-[-15px] left-0 w-full h-[1px] bg-black" />
            </div>
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {/* 프로젝트 카드 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">동아리 Project</span>
            <p className="text-sm text-gray-600 mt-1">2024.06.24-2024.07.13</p>
            <h3 className="mt-3 font-bold text-lg">Hanmadi</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>자체 게시판 기능, 사용자들 글 작성</li>
              <li>UX 단순화, 상태 UI 제거로 사용자 경험 향상</li>
            </ul>
            <a href="https://github.com/Club-PARD/Hanmadi_WEB" className="text-blue-600 underline text-sm mt-2 block">
              https://github.com/Club-PARD/Hanmadi_WEB
            </a>
            <div className="flex flex-wrap gap-2 text-xs mt-4">
              <span className="bg-sky-500 text-white px-2 py-1 rounded">React</span>
              <span className="bg-amber-400 text-black px-2 py-1 rounded">Firebase</span>
            </div>
            <button className="mt-3 text-sm bg-gray-200 px-3 py-1 rounded">📄 README</button>
          </div>

          {/* 프로젝트 카드 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">어플리케이션 개발</span>
            <p className="text-sm text-gray-600 mt-1">2024.08.06~</p>
            <h3 className="mt-3 font-bold text-lg">앱, 웹 콘텐츠를 저장하고 분류해두는 북마크 관리 서비스, RooT!</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>UI, UX 개선</li>
              <li>Swift 공유 기능 개선, 및 구현</li>
              <li>Main 화면 개선</li>
            </ul>
            <a href="https://github.com/HandongRoot/Root_FE" className="text-blue-600 underline text-sm mt-2 block">
              https://github.com/HandongRoot/Root_FE
            </a>
            <div className="flex flex-wrap gap-2 text-xs mt-4">
              <span className="bg-sky-600 text-white px-2 py-1 rounded">Flutter</span>
              <span className="bg-cyan-600 text-white px-2 py-1 rounded">Dart</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded">Swift</span>
              <span className="bg-indigo-600 text-white px-2 py-1 rounded">Kotlin</span>
            </div>
            <button className="mt-3 text-sm bg-gray-200 px-3 py-1 rounded">📄 README</button>
          </div>
          
          {/* 프로젝트 카드 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">웹사이트 개발</span>
            <p className="text-sm text-gray-600 mt-1">2024.10.23~2025.05.20</p>
            <h3 className="mt-3 font-bold text-lg">웹스크래핑 기반 방탈출 통합 예약/동행 매칭 서비스</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>Main Page 개발</li>
              <li>lazy loading 연결</li>
            </ul>
            <a href="https://github.com/SCRD-HGU/scrd-front" className="text-blue-600 underline text-sm mt-2 block">
              https://github.com/SCRD-HGU/scrd-front
            </a>
            <div className="flex flex-wrap gap-2 text-xs mt-4">
              <span className="bg-sky-500 text-white px-2 py-1 rounded">React</span>
              <span className="bg-cyan-400 text-black px-2 py-1 rounded">Netlify</span>
            </div>
            <button className="mt-3 text-sm bg-gray-200 px-3 py-1 rounded">📄 README</button>
          </div>

          {/* 프로젝트 카드 4 (수정됨) */}
          <div className="bg-white rounded-2xl p-6 shadow-md border">
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Capstone Project</span>
            <p className="text-sm text-gray-600 mt-1">2025.03.02~Present</p>
            <h3 className="mt-3 font-bold text-lg">Computer Vision을 활용한 축구 데이터 추출 및 분석</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>SAM2를 활용한 지속적인 Tracking</li>
              <li>RF-DETR(SOTA)를 활용한 객체 구분</li>
              <li>사용자들이 사용할 웹 개발</li>
              <li>Pytorch를 활용한 AI개발</li>
              <li>Roboflow를 활용한 모델 훈련</li>
            </ul>
            <a href="https://github.com/seongkong/Capstone_Project" className="text-blue-600 underline text-sm mt-2 block">
              https://github.com/seongkong/Capstone_Project
            </a>
            <div className="flex flex-wrap gap-2 text-xs mt-4">
              <span className="bg-sky-500 text-white px-2 py-1 rounded">React</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded">Pytorch</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded">Python</span>
              <span className="bg-purple-600 text-white px-2 py-1 rounded">Roboflow</span>
            </div>
            <button className="mt-3 text-sm bg-gray-200 px-3 py-1 rounded">📄 README</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        © 2025. All rights reserved.
      </footer>
    </div>
  );
}

export default Seongkong;

// 뭐가 뭔지 잘 모르겠다... 다시 시작해보자..
// 잰디,,,,