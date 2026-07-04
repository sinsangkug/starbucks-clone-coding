// [강의 포인트] 외부 API(카카오맵) 연동과 자바스크립트 객체(Object) 다루기

function initKakaoMap() {
  const mapContainer = document.getElementById('kakao-map'); // 지도를 표시할 div 
  
  // 지도의 중심좌표와 확대 레벨 설정
  const mapOption = { 
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 서울시청 기준
      level: 4 
  };
  
  // 1. 지도 생성
  const map = new kakao.maps.Map(mapContainer, mapOption); 
  
  // 2. 마커를 표시할 스타벅스 매장 데이터 배열 (비전공자에게 배열과 객체 개념 설명하기 좋음)
  const storePositions = [
      {
          title: '스타벅스 무교동점', 
          latlng: new kakao.maps.LatLng(37.567817, 126.978807),
          address: '서울특별시 중구 무교로 15'
      },
      {
          title: '스타벅스 시청플러스점', 
          latlng: new kakao.maps.LatLng(37.566290, 126.979808),
          address: '서울특별시 중구 을지로 19'
      },
      {
          title: '스타벅스 환구단점', 
          latlng: new kakao.maps.LatLng(37.564448, 126.979157),
          address: '서울특별시 중구 소공로 112'
      }
  ];
  
  // 3. 반복문을 돌며 지도에 마커 생성 및 정보창(인포윈도우) 연결
  storePositions.forEach(store => {
      // 마커 생성
      const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: store.latlng, // 마커 위치
          title: store.title // 마커 타이틀 (마우스 오버 시 툴팁)
      });
      
      // 인포윈도우(말풍선) 생성
      const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:10px; font-size:14px; color:#333;">
                      <strong>${store.title}</strong><br>
                      <span style="font-size:12px; color:#666;">${store.address}</span>
                    </div>`
      });
      
      // [강의 포인트] 이벤트 리스너: 마커에 마우스 클릭 시 말풍선 띄우기
      kakao.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
      });
  });
}

// 카카오맵 SDK 로딩이 지연될 수 있으므로, 창이 로드된 후 실행하도록 처리
window.addEventListener('load', () => {
  // kakao 객체가 존재하는지 확인 (API 키 오류나 스크립트 로딩 실패 방어)
  if (window.kakao && window.kakao.maps) {
      // 로드 완료 후 초기화 실행 (v3 버전의 방식)
      kakao.maps.load(() => {
          initKakaoMap();
      });
  } else {
      document.getElementById('kakao-map').innerHTML = '<p style="text-align:center; padding-top:50px; color:#999;">카카오맵 API 스크립트 로딩에 실패했거나 API 키를 입력하지 않았습니다.</p>';
  }
});
