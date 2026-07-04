// [강의 포인트] IFrame Player API 비동기 로드 및 데이터 API를 통한 영상 제어

// 1. YouTube IFrame API 비동기 로드 (기본 제공 코드)
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. IFrame API 로드 후 실행되는 함수 (API에서 지정된 이름)
async function onYouTubeIframeAPIReady() {
  // 3. YouTube Data API를 통해 최신 영상 ID 가져오기
  // TODO 3-1. YouTube Data API 키와 채널 ID 변수를 선언하세요.
  const YOUTUBE_API_KEY = '';
  const CHANNEL_ID = '';
  // TODO 3-2. API 호출 실패를 대비한 기본 영상 ID(Fallback) 변수를 선언하세요.
  let targetVideoId = '';

  try {
    // TODO 3-3. fetch()를 이용해 특정 채널의 최신 영상 1개를 가져오는 YouTube Data API를 호출하세요.
    
    // TODO 3-4. 응답 데이터를 JSON으로 변환하세요.
    
    // TODO 3-5. 응답 데이터가 정상적일 경우, targetVideoId 변수값을 응답받은 최신 영상 ID로 교체하세요.
    
  } catch (error) {
    console.error('유튜브 데이터를 불러오는데 실패했습니다. 기본 영상을 재생합니다.', error);
  }

  // 4. 유튜브 플레이어 생성
  // TODO 4-1. new YT.Player('player', { ... }) 객체를 생성하여 유튜브 영상을 화면에 띄우세요.
  // 옵션: videoId, playerVars (autoplay, loop, playlist), events (onReady: 음소거)
  
}