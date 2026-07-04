// [강의 포인트] OpenWeatherMap API를 사용해 실시간 날씨에 따른 음료 추천 기능 구현하기

// 1. API 키와 기본 설정
// TODO 1-1. 수강생 각자의 OpenWeatherMap API 키를 변수에 할당하세요.
const WEATHER_API_KEY = ''; 
// TODO 1-2. 기본 도시를 설정하세요. (예: 'Seoul')
const CITY = ''; 
// TODO 1-3. API 요청 URL을 백틱(`)을 사용해 완성하세요. (units=metric, lang=kr 파라미터 추가)
const WEATHER_URL = ``;

// 2. 비동기 데이터 호출 및 추천 로직 함수
async function fetchWeatherAndRecommend() {
  // TODO 2-1. 날씨 뱃지 콘텐츠가 들어갈 HTML 요소를 선택하세요. (id: 'weather-badge-content')
  
  try {
    // TODO 2-2. fetch() 함수를 사용해 WEATHER_URL로 요청을 보내고, 결과를 response 변수에 담으세요.
    
    // TODO 2-3. API 호출 실패 시 에러를 발생시키는 방어 코드를 작성하세요. (!response.ok)
    
    // TODO 2-4. 응답 데이터를 JSON 객체로 변환하세요. (await response.json())
    
    // TODO 2-5. 데이터에서 현재 온도(temp)와 날씨 상태(condition)를 추출하세요.
    
    // 3. 조건부 렌더링 로직 (비전공자 조건문 연습)
    // TODO 3-1. 날씨 아이콘 이름과 추천 음료 문자열을 담을 변수를 선언하세요.
    
    // TODO 3-2. if/else if/else 문을 사용해 조건(비, 눈, 폭염, 한파, 기본)에 따른 추천 로직을 작성하세요.
    
    // 4. 동적으로 DOM에 데이터 주입
    // TODO 4-1. 선택해둔 HTML 요소의 innerHTML에 템플릿 리터럴을 활용해 화면을 그리세요.
    
  } catch (error) {
    console.log('날씨 API 연동 전이거나 오류 발생. 기본 UI를 표시합니다.', error);
    // TODO 5. 에러 발생 시 화면이 깨지지 않도록 기본(Fallback) UI를 innerHTML에 넣어주세요.
  }
}

// 6. 스크립트 로드 시 함수 실행
// TODO 6-1. 만들어진 fetchWeatherAndRecommend() 함수를 호출하세요.
