s = 0
m = 0
h = 0

//현재 시각 표현
function now() {
    document.getElementById('time').innerHTML = (h < 10 ? "0"+h : h)+":"+(m < 10 ? "0"+m : m)+":"+(s < 10 ? "0"+s : s);
}

//타이머
function timer() {
    s = s + 1;

    if (s == 60) {
        m = m + 1
        s = 0
    }

    if (m == 60 ){
        h = h + 1
        m = 0
    }

    now()
    start();
}

//타이머 시작
function start() {
    tmp = setTimeout(timer, 1000);
}

//타이머 멈춤
function stop() {
    clearTimeout(tmp)
}

//타이머 리셋
function reset() {
    stop()
    s = 0
    m = 0
    h = 0
    now()
}