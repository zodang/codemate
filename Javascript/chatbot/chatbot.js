//상단 타이핑 애니메이션
var typing = document.getElementsByClassName('help')[0];
var typewriter = new Typewriter(typing, {
    loop: true,
    });

typewriter.typeString('개구리에게 말을 걸어보자')
    .pauseFor(1000)
    .deleteAll()
    .typeString('안녕')
    .pauseFor(1000)
    .deleteAll()
    .typeString('불켜줘')
    .pauseFor(1000)
    .deleteAll()
    .typeString('불꺼줘')
    .pauseFor(1000)
    .deleteAll()
    .typeString('따라해')
    .pauseFor(1000)
    .deleteAll()
    .typeString('그만해')
    .pauseFor(1000)
    .deleteAll()
    .typeString('잘가')
    .pauseFor(1000)
    .deleteAll()
    .typeString('...')
    .pauseFor(1000)
    .deleteAll()
    .start();


//따라하기 기능을 위한 변수
var follow = 0;

//말 배우기 기능을 위한 변수
var user_question = "";
var user_answer = "";
var teach = 0;
var array = [];


//챗봇 기능
function check_text() {
    var value = document.getElementById("console").value;   //사용자 입력값
    var flog = document.getElementsByClassName('flog')[0];  //개구리 이미지
    var text = document.getElementsByClassName("answer")[0];  //개구리 대답

    //가르치기
    if (teach == 1) {
        if (value == "네") {
            text.innerHTML = "뭐라고 가르칠까요?";
            teach = 2;
        }
        else if (value == "아니요") {
            text.innerHTML = "ㅇㅋ..."
            teach = 0;
        }
        else {
            text.innerHTML == "네 /아니요";
        }
        return;
    }

    if (teach == 2){
        user_answer = value;
        array.push({"question": user_question, "answer": user_answer});
        text.innerHTML = "말을 배웠습니다.";
        flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/891/681/296/a3bfe4e944d8c6faa2751626de666d12.jpg')";
        teach = 0;
        return;
    }

    //가르친 말이 배열에 있으면 출력
    for (var i = 0; i < array.length; i++){
        if (value == array[i].question) {
            text.innerHTML = array[i].answer + "...";
            return;
        }
    }

    if (value == "안녕") {
        text.innerHTML = "^^...";        
        flog.style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2758CF3957BBD6D71F')";
    }

    else if (value == "잘가") {
        text.innerHTML = "ㅜㅜ...";
        flog.style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/216EB13457BBD6DF2D')";
    }

    else if (value == "불꺼줘") {
        text.innerHTML = "zzz..."
        document.querySelector("body").style.backgroundColor = "rgb(80, 80, 80)";
        text.style.backgroundColor = "white";
        flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/358/354/232/eae7e107387042188da08d45534ab747.jpg')";
    }

    else if (value == "불켜줘") {
        text.innerHTML = "ㅇㅅㅇ..."
        document.querySelector("body").style.backgroundColor = "white";
        flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/358/354/232/7ade4f7baf9f19519d5dfd1fb919766a.jpg')";
    }

    else if (value == "...") {
        text.innerHTML = "ㅎㅎ...";
        flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/891/681/296/65788c5eb4fbbfa7537d90d6a3aee16b.jpg')";
    }

    //따라하기
    else if (follow == 0 && value == "따라해") {
        follow = 1;
        text.innerHTML = "ㅇㅋ...";
        flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/358/354/232/cc643e1cf451ab0fea80dfd6cbf6dfb3.png')";
    }

    else if (follow == 1) {
        if (value == "그만해") {
            follow = 0;
            text.innerHTML = "ㅇㅋ...";
            flog.style.backgroundImage = "url('https://2.gall-img.com/hygall/files/attach/images/82/358/354/232/7ae17a369dd6e63a61307024c2f4254c.jpg')";
        }
        
        else {
            text.innerHTML = value + "...";
            flog.style.backgroundImage = "url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrRfa2%2FbtqYQxFQluA%2FjxGkvZoORy5TqDZjVfLVN0%2Fimg.jpg')";
        }
    }

    else {
        console.log("??")
        text.innerHTML = "???...";
        flog.style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2147503C57BBD6E619')";
        
        setTimeout(function() {
            text.innerHTML = "말을 가르쳐준다?<br>(네/아니요)"
        },1500);
        user_question = value; //가르쳐 줄 말 저장
        teach = 1;
    }
}

//엔터로 질문하기
function press_enter() {
    if (window.event.keyCode == 13) {
        check_text();
    }
}