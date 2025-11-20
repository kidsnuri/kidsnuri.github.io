// DOM(HTML)이 모두 로드된 후에 스크립트를 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 현재 URL에서 쿼리 문자열(? 뒤의 내용)을 가져옵니다.
    const urlParams = new URLSearchParams(window.location.search);

    // 2. 특정 변수 이름으로 값을 읽어옵니다.
    const category = urlParams.get('category'); 
    const fileName = urlParams.get('name');        

    if (category) {
        
        src="images/coloring/dinosaur/tyrannosaurus_2.png"
        const NEW_IMAGE_PATH = "images/coloring/" + category +"/" + fileName +".png";

        // 1. ID를 사용하여 <img> 요소를 찾습니다.
        const imageElement = document.getElementById('imageToPrint');
        
        // 2. `.src` 속성에 새로운 경로를 할당합니다.
        if (imageElement) {
            imageElement.src = NEW_IMAGE_PATH;
            imageElement.alt = '귀여운 티라노사우루스 색칠공부';
        } 

    } 
});