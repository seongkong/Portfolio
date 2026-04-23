# Im Seongbin Portfolio

개인 포트폴리오 웹사이트입니다.  
다크 톤 디자인 시스템 기반으로 About, Projects, Skills 섹션을 단일 페이지로 구성했습니다.

## Live

- Vercel: 배포 환경에서 확인 가능

## Tech Stack

- React + TypeScript (Create React App)
- Tailwind CSS
- GitHub Actions (CI)
- Vercel (CD)

## Design System

- Background: `#0f1117`
- Card: `#161b27`
- Primary: `#3b82f6`
- Text: `#e2e8f0`
- Muted: `rgba(255,255,255,0.45)`
- Border: `rgba(255,255,255,0.08)`
- Font: system sans-serif

## Sections

- Nav: `Im Seongbin`, About / Projects / Skills / GitHub
- Hero: 역할 태그 + 핵심 메시지 + CTA 버튼
- Projects: 반응형 카드 그리드 (`auto-fit`, `minmax(280px, 1fr)`)
- Skills: 3열 그룹 카드
- Footer: GitHub / Email 링크

## Projects

- Invest Jarvis
  - AI 기반 투자 비서
  - Link: [https://github.com/seongkong/Invest_Jarvis](https://github.com/seongkong/Invest_Jarvis)
- SCRDLET
  - 방탈출 테마 검색/예약/리뷰 SPA
  - Link: [https://github.com/SCRD-HGU/scrd-front](https://github.com/SCRD-HGU/scrd-front)
- RooT
  - 크로스플랫폼 북마크 앱
  - Link: [https://github.com/HandongRoot/Root_FE](https://github.com/HandongRoot/Root_FE)
- Little Kids
  - 아동 대상 서비스 웹 프로젝트
  - Link: [https://github.com/Handong-LittleKids/Little_Kids_Web](https://github.com/Handong-LittleKids/Little_Kids_Web)
- Hanmadi
  - 동아리 커뮤니티 웹 서비스
  - Link: [https://github.com/Club-PARD/Hanmadi_WEB](https://github.com/Club-PARD/Hanmadi_WEB)

## Getting Started

```bash
cd seongkong
npm install
npm start
```

개발 서버: [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm start`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드 생성
- `npm test`: 테스트 실행

## CI/CD

- CI: GitHub Actions (`.github/workflows/ci.yml`)
  - main/master 대상 push, pull_request에서 테스트 + 빌드 검증
- CD: Vercel
  - GitHub 연동 브랜치 기준 자동 배포

## Branch Strategy

- `main`: 배포 안정 브랜치
- `feature/*`: 기능/디자인 작업 브랜치
- 작업 완료 후 PR을 통해 `main`으로 병합
