var text = "zo_dang"
var count = 0;
var colors = ["#01b59c", "#dee03f", "#ffcb43", "#ff704e", "#fd1d66", "#e50196", "#8e5fbf"]


function change_text() {
    //문자열 끝에 가면 count 초기화
    if (count > text.length - 1) {
        count = -1;
    }
    
    //문자열 생성
    tmp = ""
    for (var i = 0; i < count+ 1; i++){
        tmp = tmp + text[i]
    }

    document.getElementById("obj").innerHTML = tmp

    document.getElementById("obj").style.color = colors[count]

    count++
}