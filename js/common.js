// DOM(HTML)이 모두 로드된 후에 스크립트를 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 햄버거 버튼과 메뉴를 DOM에서 찾습니다.
    const toggleBtn = document.querySelector('.nav-toggle-btn');
    const menu = document.querySelector('#main-menu');

    // 2. 햄버거 버튼 클릭 이벤트 리스너를 추가합니다.
    toggleBtn.addEventListener('click', function() {
        
        // (핵심) .menu 요소에 'is-open' 클래스를 추가/제거(toggle)합니다.
        menu.classList.toggle('is-open');
        
        // (선택) 햄버거 아이콘 X 모양으로 바꾸기 (애니메이션)
        toggleBtn.classList.toggle('is-open');
    });
});