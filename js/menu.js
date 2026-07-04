// [강의 포인트] 로컬 JSON 파일을 비동기로 불러와서 화면에 메뉴 리스트 렌더링하기 (DOM 조작)

// 1. 메뉴 데이터 호출 함수 만들기
async function loadMenuData() {
  // TODO 1-1. 메뉴 리스트를 삽입할 컨테이너 HTML 요소를 선택하세요. (id: 'menu-list-container')
  
  try {
    // TODO 1-2. fetch()를 사용해 로컬에 있는 '../data/menu.json' (또는 './data/menu.json') 파일을 호출하세요.
    
    // TODO 1-3. 네트워크 응답 실패 시 에러를 던지세요.
    
    // TODO 1-4. JSON 데이터를 자바스크립트 객체 배열로 변환하세요.
    
    // 2. HTML 동적 생성
    // TODO 2-1. 생성된 HTML 문자열을 담을 변수를 빈 문자열로 초기화하세요.
    
    // TODO 2-2. forEach() 반복문을 돌며 HTML 구조(템플릿 리터럴)를 조립하세요.
    // 팁: item.price.toLocaleString('ko-KR') 를 사용해 천 단위 콤마를 찍어보세요.
    
    // 3. 화면 렌더링
    // TODO 3-1. 조립된 HTML 문자열을 컨테이너 요소의 innerHTML에 할당하세요.
    
  } catch (error) {
    console.error('메뉴 데이터를 불러오는 중 에러 발생:', error);
    // TODO 4. 에러 발생 시 사용자에게 보여줄 에러 메시지를 화면(innerHTML)에 출력하세요.
  }
}

// 5. 함수 실행
// TODO 5-1. 만든 loadMenuData() 함수를 호출하세요.
