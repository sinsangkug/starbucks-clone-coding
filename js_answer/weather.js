// [강의 포인트] OpenWeatherMap API를 사용해 실시간 날씨에 따른 음료 추천 기능 구현하기

// 1. API 키와 기본 설정 (수업 시 회원가입 후 발급받은 본인 키 사용)
const WEATHER_API_KEY = 'YOUR_API_KEY_HERE'; // 수강생의 OpenWeatherMap API 키를 입력하게 합니다.
const CITY = 'Seoul'; // 기본 지역 (서울)
// lang=kr 파라미터를 추가하면 날씨 설명을 한국어로 받을 수 있습니다.
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;

// 2. 비동기 데이터 호출 함수
async function fetchWeatherAndRecommend() {
  const weatherBadgeContent = document.getElementById('weather-badge-content');
  
  try {
    const response = await fetch(WEATHER_URL);
    
    // API 통신이 실패했거나 키를 아직 넣지 않은 경우 에러 발생시키기 (Fallback 렌더링을 위함)
    if (!response.ok) {
      throw new Error('API 호출 실패 혹은 키 오류');
    }
    
    const data = await response.json();
    const temp = data.main.temp; // 섭씨 온도
    const condition = data.weather[0].main; // 날씨 상태 분류 (Clear, Clouds, Rain, Snow 등)
    
    // 3. 날씨 및 온도에 따른 조건부 렌더링 로직 (비전공자 조건문 연습에 아주 좋습니다)
    let iconName = 'wb_sunny'; // 구글 머티리얼 아이콘 이름
    let recommendation = '';
    
    if (condition === 'Rain' || condition === 'Drizzle') {
      iconName = 'water_drop';
      recommendation = '비올땐 따뜻한<br>바닐라 라떼 ☕';
    } else if (condition === 'Snow') {
      iconName = 'ac_unit';
      recommendation = '눈올땐 달콤한<br>토피넛 라떼 ❄️';
    } else if (temp > 28) {
      iconName = 'local_fire_department';
      recommendation = '폭염엔 시원한<br>자바칩 프라푸치노 🧊';
    } else if (temp < 10) {
      iconName = 'severe_cold';
      recommendation = '추울땐 따뜻한<br>아메리카노 ☕';
    } else {
      iconName = 'sentiment_satisfied_alt';
      recommendation = '오늘 같은 날엔<br>아이스 카라멜 마키아또 ✨';
    }
    
    // 4. 동적으로 DOM에 데이터 주입
    weatherBadgeContent.innerHTML = `
      <span class="material-icons">${iconName}</span>
      <p>${Math.round(temp)}°C</p>
      <div class="drink-rec">${recommendation}</div>
    `;
    
  } catch (error) {
    console.log('날씨 API 연동 전이거나 오류 발생. 기본 UI를 표시합니다.', error);
    
    // [강의 포인트] 에러가 났을 때 화면이 깨지지 않고 기본 데이터를 보여주도록 방어적 프로그래밍 설명
    weatherBadgeContent.innerHTML = `
      <span class="material-icons">wb_sunny</span>
      <p>25°C</p>
      <div class="drink-rec">오늘의 추천<br>아이스 아메리카노 🧊</div>
    `;
  }
}

// 스크립트가 로드되면 바로 실행
fetchWeatherAndRecommend();
