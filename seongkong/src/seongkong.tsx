import React from 'react';

type TagTone = 'primary' | 'neutral';

type Project = {
  title: string;
  description: string;
  href: string;
  tags: Array<{ label: string; tone: TagTone }>;
};

type SkillGroup = {
  title: string;
  items: string[];
};

const theme = {
  background: '#0f1117',
  card: '#161b27',
  primary: '#3b82f6',
  text: '#e2e8f0',
  muted: 'rgba(255,255,255,0.45)',
  border: 'rgba(255,255,255,0.08)',
};

const projects: Project[] = [
  {
    title: 'Invest Jarvis',
    description:
      'AI 기반 투자 비서. SSE 스트리밍, RAG 검색, Next.js App Router 아키텍처 설계',
    href: 'https://github.com/seongkong/Invest_Jarvis',
    tags: [
      { label: 'Next.js', tone: 'primary' },
      { label: 'TypeScript', tone: 'primary' },
      { label: 'Jotai', tone: 'primary' },
      { label: 'TanStack Query', tone: 'neutral' },
    ],
  },
  {
    title: 'SCARLET',
    description:
      '방탈출 테마 검색·예약·리뷰 SPA. 다중 필터 UI, Recoil+React Query 상태 분리, OAuth 인증',
    href: 'https://github.com/SCRD-HGU/scrd-front',
    tags: [
      { label: 'React', tone: 'primary' },
      { label: 'React Query', tone: 'neutral' },
      { label: 'Recoil', tone: 'primary' },
      { label: 'Styled Components', tone: 'neutral' },
    ],
  },
  {
    title: 'RooT',
    description:
      '크로스플랫폼 북마크 앱. App Store 출시, 실사용자 150명, Blue-Green 무중단 배포',
    href: 'https://github.com/HandongRoot/Root_FE',
    tags: [
      { label: 'Flutter', tone: 'primary' },
      { label: 'AWS', tone: 'primary' },
      { label: 'Swift', tone: 'primary' },
      { label: 'Kotlin', tone: 'primary' },
      { label: 'GitHub Actions', tone: 'neutral' },
      { label: 'Docker', tone: 'neutral' },
    ],
  },
  {
    title: 'Little Kids',
    description:
      '아동 대상 서비스 웹 프로젝트. 직관적인 정보 구조와 접근성을 중심으로 화면 플로우를 설계하고 UI를 구현',
    href: 'https://github.com/Handong-LittleKids/Little_Kids_Web',
    tags: [
      { label: 'React', tone: 'primary' },
      { label: 'TypeScript', tone: 'primary' },
      { label: 'Styled Components', tone: 'neutral' },
      { label: 'Firebase', tone: 'neutral' },
    ],
  },
  {
    title: 'Hanmadi',
    description:
      '동아리 커뮤니티 웹 서비스. 게시판 기능 구현, 상태 UI 단순화, 사용자 흐름 개선으로 사용성을 높인 프로젝트',
    href: 'https://github.com/Club-PARD/Hanmadi_WEB',
    tags: [
      { label: 'React', tone: 'primary' },
      { label: 'Firebase', tone: 'neutral' },
      { label: 'UI/UX', tone: 'neutral' },
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Jotai',
      'Recoil',
      'TanStack Query',
      'vanilla-extract',
      'Styled Components',
    ],
  },
  {
    title: 'Backend + Infra',
    items: ['FastAPI', 'AWS EC2/S3', 'Docker', 'GitHub Actions', 'RunPod'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Swift (MethodChannel)', 'Kotlin (MethodChannel)'],
  },
];

function Seongkong() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", Arial, sans-serif',
      }}
    >
      <header
        className="sticky top-0 z-20"
        style={{
          backgroundColor: theme.background,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#about" className="text-sm font-semibold md:text-base">
            Im Seongbin
          </a>
          <nav className="flex items-center gap-4 text-xs md:gap-6 md:text-sm">
            <a href="#about" style={{ color: theme.muted }}>
              About
            </a>
            <a href="#projects" style={{ color: theme.muted }}>
              Projects
            </a>
            <a href="#skills" style={{ color: theme.muted }}>
              Skills
            </a>
            <a
              href="https://github.com/seongkong"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.muted }}
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        <section id="about" className="py-20 md:py-28">
          <span
            className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: 'rgba(59,130,246,0.2)',
              color: theme.primary,
              border: `1px solid rgba(59,130,246,0.45)`,
            }}
          >
            Fullstack Developer
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-[52px]">
            복잡한 문제를{' '}
            <span style={{ color: theme.primary }}>구조로</span> 푸는 개발자
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 md:text-base" style={{ color: theme.muted }}>
            사용자 경험과 기술 구조를 함께 설계합니다. 문제를 작은 단위로 분해하고,
            지속 가능한 아키텍처와 일관된 UI 시스템으로 제품을 완성해 나갑니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/seongkong"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: theme.primary, color: '#ffffff' }}
            >
              GitHub 보러가기
            </a>
            <a
              href="#"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold"
              style={{
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
            >
              이력서 다운로드
            </a>
          </div>
        </section>

        <section id="projects" className="border-t py-16" style={{ borderColor: theme.border }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.primary }}
          >
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold">주요 프로젝트</h2>

          <div
            className="mt-8 grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border p-5 transition-colors duration-200 hover:border-[#3b82f6]"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                    style={{ color: theme.muted }}
                    aria-label={`${project.title} 링크`}
                  >
                    ↗
                  </a>
                </div>

                <p className="mt-3 text-sm leading-6" style={{ color: theme.muted }}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag.label}`}
                      className="rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{
                        backgroundColor:
                          tag.tone === 'primary'
                            ? 'rgba(59,130,246,0.22)'
                            : 'rgba(255,255,255,0.08)',
                        color:
                          tag.tone === 'primary'
                            ? theme.primary
                            : 'rgba(226,232,240,0.9)',
                        border: `1px solid ${
                          tag.tone === 'primary'
                            ? 'rgba(59,130,246,0.45)'
                            : 'rgba(255,255,255,0.12)'
                        }`,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t py-16" style={{ borderColor: theme.border }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.primary }}
          >
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold">기술스택</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border p-5"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                }}
              >
                <h3 className="text-base font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={`${group.title}-${item}`}
                      className="rounded-full px-2.5 py-1 text-xs"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: 'rgba(226,232,240,0.9)',
                        border: `1px solid rgba(255,255,255,0.08)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        className="mt-10 border-t"
        style={{
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p style={{ color: theme.muted }}>© 2026 Im Seongbin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/seongkong"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.muted }}
            >
              GitHub
            </a>
            <a href="mailto:bins506@gmail.com" style={{ color: theme.muted }}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Seongkong;