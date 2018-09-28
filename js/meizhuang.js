window.onload=function () {

    let photo = document.querySelector('.pic');
    let pt = document.querySelectorAll('.pic .pt');
    let dot = document.querySelectorAll('.dot');

    let currentIndex = 0;
    for (let i=0; i<dot.length;i++) {
        dot[i].onclick = function () {
            for (let j=0; j<dot.length;j++) {
                dot[j].className = 'dot';
                pt[j].style.display = 'none';
            }
            dot[i].className = 'dot hot';
            pt[i].style.display = 'block';

            currentIndex = i;
        };
    }

    let t = setInterval(move, 1500);
    //鼠标移入停止轮播
    photo.onmouseenter = function () {
        clearInterval(t);
    };
    // 鼠标移出继续轮播
    photo.onmouseleave = function () {
        t=setInterval(move,1500);
    };

    function move(){
        currentIndex++;
        if (currentIndex===pt.length){
            currentIndex=0;
        }
        pt.forEach(function(element){
            element.style.display = 'none';
        });
        dot.forEach(element=>element.className = 'dot');
        pt[currentIndex].style.display = 'block';
        dot[currentIndex].className = 'dot hot';
        // currentIndex =0;
    }
    function moveL(){
        currentIndex--;
        if (currentIndex < 0){
            currentIndex=pt.length-1;
        }
        pt.forEach(function (element) {
            element.style.display = 'none';
        });
        dot.forEach(element=>element.className = 'dot');
        pt[currentIndex].style.display = 'block';
        dot[currentIndex].className = 'dot hot';
    }

}

