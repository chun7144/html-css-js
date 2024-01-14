// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    // console.log(currentTxt);
    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
        // console.log(currentTxt);
    }
    
    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        // console.log(currentTxt.join(""));
        if(currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
            // console.log(index);
        }
    }
    writeTxt();
})();

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
(function(){
    const headerEl = document.querySelector("header");
    window.addEventListener("scroll", function(){
        // scrollCheck();
        this.requestAnimationFrame(scrollCheck);
    });
    
    function scrollCheck(){
        const browserScrolly = window.scrollY ? window.scrollY : window.pageYOffset;
        if(browserScrolly > 0){
            headerEl.classList.add('active');
        }else{
            headerEl.classList.remove('active');
        }
        // console.log('scroll');
    }
})();

// 애니메이션 스크롤
(function(){
    const animationMove = function(selector){
        const target = document.querySelector(selector);
        const browserScrolly = window.pageYOffset;
        const targetScrolly = target.getBoundingClientRect().top + browserScrolly;
        window.scrollTo({top: targetScrolly, behavior: 'smooth'});
        // console.log(target);
    }
    
    const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
    console.log(scrollMoveEl);
    for(let i=0; i< scrollMoveEl.length; i++){
        scrollMoveEl[i].addEventListener("click", function(e){
            // console.log(this.dataset.target);
            animationMove(this.dataset.target); 
        });
    }
})();



