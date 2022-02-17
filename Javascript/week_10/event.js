function onClick1() {

    document.getElementById("wait").innerHTML = "wait..."
    document.getElementById("name").innerHTML = ""
    document.getElementById("phone").innerHTML = ""

    //2초 뒤 이름과 전화번호 출력
    setTimeout(function() {
        document.getElementById("wait").innerHTML = ""
        document.getElementById("name").innerHTML = "김철수"
        document.getElementById("phone").innerHTML = "010-0000-0000"
    },2000 )
}

//버튼가 함수 연결
document.getElementById('clickMe').addEventListener('click', onClick1);