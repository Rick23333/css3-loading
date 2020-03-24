var loading = document.getElementsByClassName('loading')[0],
    content = document.getElementsByClassName('content')[0],
    next = document.getElementsByClassName('nextPage')[0],
    title = document.getElementsByClassName('title')[0];
var X = 0;
var timer = null;

// timer = setInterval(function () {
//     X += 10;
//     Y -= 10;
//     content.style.left = X + 'px';
//     content.style.right = Y +'px';
// }, 30)

timer = setInterval(function () {
    X += 10;
    if(X <= 300) {
        loading.style.width = X + 'px';
    }else {
        clearInterval(timer);
        content.classList.add('complete');
        next.classList.add('show');
        title.classList.add('titleShow');
        setTimeout(function () {
            content.style.display = 'none';
        }, 3000)
    }
    
}, 90)

