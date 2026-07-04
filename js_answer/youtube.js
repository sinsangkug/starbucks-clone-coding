// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
async function onYouTubeIframeAPIReady() {
  // [강의 포인트] 비동기 통신(fetch)을 통해 동적으로 유튜브 영상 ID 가져오기
  const YOUTUBE_API_KEY = 'YOUR_API_KEY'; // 수업 시 수강생들에게 API 키 발급 방법 안내
  const CHANNEL_ID = 'UC_OAxIGPzTEnG5NfE1hXqxw'; // 스타벅스 코리아 공식 유튜브 채널 ID
  let targetVideoId = 'An6LvWQuj_8'; // API 호출 실패 시 사용할 기본 영상 ID (Fallback)

  try {
    // YouTube Data API 호출 (최신 영상 1개 가져오기)
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${YOUTUBE_API_KEY}`);
    const data = await response.json();
    
    // API 응답이 정상적으로 왔을 경우 영상 ID 교체
    if (data.items && data.items.length > 0) {
      targetVideoId = data.items[0].id.videoId;
      console.log('최신 스타벅스 영상 세팅 완료:', targetVideoId);
    }
  } catch (error) {
    console.error('유튜브 데이터를 불러오는데 실패했습니다. 기본 영상을 재생합니다.', error);
  }

  // 유튜브 플레이어 생성
  new YT.Player('player', {
    videoId: targetVideoId, // 동적으로 할당된 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: targetVideoId // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}
