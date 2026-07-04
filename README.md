# ☕ Starbucks Clone Coding (교육용 템플릿)

국비 지원 웹 퍼블리싱/프론트엔드 수업에서 **비전공자 학생들을 대상**으로 JavaScript 및 외부 API 연동을 실습하기 위해 제작된 스타벅스 코리아 랜딩 페이지 클론 코딩 프로젝트입니다.

## 📌 프로젝트 소개
이 프로젝트는 단순한 마크업 및 CSS 클론을 넘어, 실제 웹 서비스에서 자주 사용되는 다양한 **외부 API 연동**과 **동적 UI 제어(애니메이션, 슬라이더)**를 JavaScript로 직접 구현해 보는 실습 환경을 제공합니다. 

학생들은 뼈대 코드와 가이드 주석(TODO)이 작성된 `js/` 폴더의 파일들을 순서대로 채워 나가며 완성된 웹사이트를 직접 구현하게 됩니다.

## 🛠 주요 실습 기능 (Features)
- **외부 API 연동 실습**
  - **카카오맵 API (`map.js`)**: 스타벅스 매장 위치에 마커와 말풍선(InfoWindow) 띄우기
  - **OpenWeatherMap API (`weather.js`)**: 실시간 날씨 정보를 불러와 조건문(if/else)을 활용해 날씨에 맞는 음료 추천 로직 작성하기
  - **YouTube Iframe & Data API (`youtube.js`)**: 스타벅스 공식 채널의 최신 영상 ID를 동적으로 가져와 배경 비디오로 재생하기
- **외부 라이브러리 및 UI 인터랙션 실습 (`main.js`)**
  - **GSAP & ScrollMagic**: 스크롤 위치에 따른 페이드인, 둥둥 떠다니는 애니메이션 제어
  - **Swiper**: 공지사항(수직 슬라이드), 프로모션 및 어워즈(수평 슬라이드) 적용
  - **Lodash**: 스크롤 이벤트 최적화(Throttle) 처리
- **DOM 제어 및 비동기 통신 (`menu.js`)**
  - 로컬 JSON 데이터를 `fetch()`로 불러와 반복문을 통해 HTML 요소로 렌더링하기

## ⚙️ 기술 스택 (Tech Stack)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Libraries**: GSAP, ScrollMagic, Swiper, Lodash
- **APIs**: Kakao Map API, OpenWeatherMap API, YouTube Data API v3

## 📂 폴더 구조 및 역할 (Directory Structure)
```text
📦starbucks-clone-coding
 ┣ 📂css
 ┃ ┗ 📜main.css         # 전체 스타일링 CSS 파일
 ┣ 📂data
 ┃ ┗ 📜menu.json        # 메뉴 리스트 동적 렌더링을 위한 실습용 로컬 JSON 데이터
 ┣ 📂images             # 프로젝트에 사용된 이미지 소스
 ┣ 📂js                 # 👨‍🎓 [학생용] 실습 템플릿 폴더 (동작 코드가 비워져 있고 TODO 주석만 존재)
 ┃ ┣ 📜main.js          # UI 인터랙션 및 라이브러 실습
 ┃ ┣ 📜map.js           # 카카오맵 실습
 ┃ ┣ 📜menu.js          # JSON fetch 및 DOM 렌더링 실습
 ┃ ┣ 📜weather.js       # 날씨 API 실습
 ┃ ┗ 📜youtube.js       # 유튜브 API 실습
 ┣ 📂js_answer          # 👨‍🏫 [강사용] 원본 정답 코드 폴더 (모든 기능이 완성된 코드)
 ┣ 📜api_key_guide.md   # 🔑 외부 API 키 발급을 위한 비전공자용 상세 매뉴얼 (화면 공유/배포용)
 ┣ 📜index.html         # 메인 HTML 마크업 파일
 ┗ 📜README.md          # 프로젝트 안내 문서
```

## 🚀 설치 및 실행 방법 (Getting Started)
1. 이 저장소(Repository)를 로컬 컴퓨터로 `Clone` 하거나 `.zip` 파일로 다운로드 받습니다.
2. VS Code에서 폴더를 엽니다.
3. VS Code 확장 프로그램인 **Live Server**를 설치합니다.
4. `index.html` 파일을 열고 우측 하단의 **Go Live** 버튼을 누르거나, 우클릭하여 **Open with Live Server**를 선택해 브라우저에 띄웁니다.

---

## 💡 강사님을 위한 수업 진행 가이드
1. **API 키 발급 진행**: 본격적인 실습 전, 동봉된 **`api_key_guide.md`** 문서를 활용해 학생들과 함께 3가지 API 키를 발급받고 설정하는 시간을 가집니다.
2. **실습 진행 (`js` 폴더)**: 초기 상태의 `index.html`을 실행하면 동적 기능이 전혀 없는 백지 상태입니다. `js/` 폴더 내의 파일들을 열고, 작성된 `// TODO 1-1` 형태의 주석 가이드를 따라가며 코딩을 진행합니다.
3. **정답 확인 (`js_answer` 폴더)**: 수업 진행 중 로직이 막히거나 완성된 코드를 참고해야 할 경우, 강사님 화면이나 듀얼 모니터에 `js_answer/` 폴더 내의 동일한 파일을 띄워두고 참고하시면 됩니다.
