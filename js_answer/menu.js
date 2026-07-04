// [강의 포인트] 로컬 JSON 파일을 비동기로 불러와서 화면에 메뉴 리스트 렌더링하기 (DOM 조작)

async function loadMenuData() {
  const menuContainer = document.getElementById('menu-list-container');
  
  try {
    // 1. fetch()를 사용해 로컬에 있는 JSON 파일 비동기 호출
    const response = await fetch('./data/menu.json');
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }
    
    // 2. JSON 데이터를 자바스크립트 객체 배열로 변환
    const menuItems = await response.json();
    
    // 3. 배열 데이터를 순회하며 HTML 요소(DOM) 동적 생성 (비전공자 핵심 포인트: 반복문과 템플릿 리터럴)
    let htmlContent = '';
    menuItems.forEach(item => {
      // 천 단위 콤마 찍기 로직 (실무 팁)
      const formattedPrice = item.price.toLocaleString('ko-KR');
      
      htmlContent += `
        <div class="menu-item">
          <div class="menu-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="menu-info">
            <h3 class="menu-name">${item.name}</h3>
            <p class="menu-eng">${item.engName}</p>
            <p class="menu-price"><strong>${formattedPrice}</strong>원</p>
          </div>
        </div>
      `;
    });
    
    // 4. 조립된 HTML 문자열을 화면에 삽입
    menuContainer.innerHTML = htmlContent;
    
  } catch (error) {
    console.error('메뉴 데이터를 불러오는 중 에러 발생:', error);
    menuContainer.innerHTML = '<p class="error-msg">메뉴를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.</p>';
  }
}

// 함수 실행
loadMenuData();
