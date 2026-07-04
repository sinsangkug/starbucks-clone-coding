// [강의 포인트] 외부 API(카카오맵) 연동과 자바스크립트 객체(Object) 다루기

// 1. 카카오맵 초기화 함수 만들기
function initKakaoMap() {
  // TODO 1-1. 지도를 표시할 HTML 요소를 id로 선택하세요. (id: 'kakao-map')
  
  // TODO 1-2. 지도의 중심좌표와 확대 레벨(level)을 설정하는 옵션 객체를 만드세요.
  
  // TODO 1-3. 카카오맵을 생성하세요. (new kakao.maps.Map)
  
  // TODO 1-4. 마커를 표시할 스타벅스 매장 데이터 배열을 만드세요. (비전공자에게 배열과 객체 개념 설명)
  // 예: { title: '스타벅스 무교동점', latlng: new kakao.maps.LatLng(...), address: '...' }
  
  // TODO 1-5. 배열의 반복문(forEach)을 돌며 지도에 마커 생성 및 정보창(인포윈도우)을 연결하세요.
  
    // TODO 1-5-1. 마커 객체 생성
    
    // TODO 1-5-2. 인포윈도우 객체 생성
    
    // TODO 1-5-3. 이벤트 리스너 추가: 마커 클릭 시 인포윈도우 열기
}

// 2. 카카오맵 SDK 로딩 확인 후 초기화 함수 실행
window.addEventListener('load', () => {
  // TODO 2-1. window.kakao 객체가 존재하는지 확인하는 조건문을 작성하세요.
  
    // TODO 2-2. kakao.maps.load() 메서드 내부에 initKakaoMap()을 호출하세요.
    
    // TODO 2-3. API 로드에 실패했을 경우 화면에 안내 메시지를 띄우는 else 문을 작성하세요.
});
