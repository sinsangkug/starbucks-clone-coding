// [강의 포인트] 주요 UI 인터랙션 및 라이브러리(Lodash, GSAP, Swiper, ScrollMagic) 활용

// 1. 통합검색 영역 인터랙션
// TODO 1-1. '.search' 요소와 그 안의 'input' 요소를 선택하세요.

// TODO 1-2. 돋보기 아이콘(.search) 클릭 시 input 요소에 포커스(focus)를 주도록 이벤트 리스너를 추가하세요.

// TODO 1-3. input 요소에 포커스가 들어갔을 때(focus), '.search' 요소에 'focused' 클래스를 추가하고 placeholder 속성을 지정하세요.

// TODO 1-4. input 요소에서 포커스가 해제되었을 때(blur), 'focused' 클래스를 제거하고 placeholder를 초기화하세요.


// 2. 우측 스크롤 배지 및 To Top 버튼 제어
// TODO 2-1. 배지 요소와 맨 위로 가기 버튼 요소를 선택하세요.

// TODO 2-2. window 전역 객체에 스크롤 이벤트를 추가하고, _.throttle()을 사용해 함수 실행 빈도를 줄여보세요.

  // TODO 2-3. window.scrollY 값에 따라 배지를 숨기거나 보이게 하는 조건문을 작성하세요. (gsap.to() 활용)
  
  // TODO 2-4. 맨 위로 가기 버튼 또한 스크롤 위치에 따라 보이거나 숨기도록 제어하세요.


// 3. To Top 버튼 클릭 이벤트
// TODO 3-1. 맨 위로 가기 버튼 클릭 시 화면 맨 위로 스크롤되도록 설정하세요. (gsap.to(window, ... { scrollTo: 0 }))


// 4. 메인 비주얼 페이드인 애니메이션
// TODO 4-1. 메인 섹션의 '.visual .fade-in' 요소들을 모두 선택하세요.

// TODO 4-2. forEach()를 활용해 각 요소에 gsap.to() 애니메이션을 순차적으로(delay 적용) 실행하세요.


// 5. Swiper 슬라이더 적용
// TODO 5-1. 공지사항(수직 슬라이드) 영역에 new Swiper() 객체를 생성하세요.

// TODO 5-2. 프로모션(수평 슬라이드, 여러 개 보이기, 자동 재생, 페이징/네비게이션 버튼 등) 영역에 Swiper를 적용하세요.

// TODO 5-3. 하단 어워즈 영역에 Swiper를 적용하세요.


// 6. 프로모션 영역 토글 기능
// TODO 6-1. 프로모션 영역('.promotion')과 토글 버튼('.toggle-promotion')을 선택하세요.

// TODO 6-2. 토글 상태를 저장할 boolean 변수를 선언하세요.

// TODO 6-3. 클릭 시 토글 상태를 반전시키고, 클래스를 추가/제거하여 숨기거나 보이게 만드세요.


// 7. 둥둥 떠다니는 애니메이션
// TODO 7-1. 랜덤 숫자 생성 함수(random)를 작성하세요.

// TODO 7-2. gsap.to(요소, 시간, 옵션)을 활용해 위아래로 움직이는 floatingObject() 함수를 작성하세요. (yoyo, repeat 활용)

// TODO 7-3. 요소(.floating1, .floating2, .floating3) 별로 함수를 호출하세요.


// 8. ScrollMagic 애니메이션
// TODO 8-1. 스크롤 위치에 따라 화면에 나타날 요소들('section.scroll-spy')을 모두 선택하세요.

// TODO 8-2. forEach()를 사용해 각 요소에 Scene 객체를 생성하고, 화면에 나타날 때 'show' 클래스를 추가하도록 ScrollMagic 제어기를 연결하세요.


// 9. 올해 연도 동적 삽입
// TODO 9-1. 푸터 영역의 '.this-year' 요소를 선택하세요.

// TODO 9-2. new Date().getFullYear() 를 이용해 요소의 textContent에 올해 연도를 삽입하세요.