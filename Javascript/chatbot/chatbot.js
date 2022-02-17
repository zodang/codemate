function check_text() {
    var value = document.getElementById("console").value;
    var text = document.getElementById("answer");

    if (value == "안녕") {
        text.innerHTML = "^^...";
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2758CF3957BBD6D71F')";
    }
    else if (value == "잘가") {
        text.innerHTML = "ㅜㅜ";
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/216EB13457BBD6DF2D')";
    }
    else if (value == "불꺼줘") {
        text.innerHTML = "ᴗ.ᴗᶻ ᶻ ᶻ"
        document.querySelector("body").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("flog").style.backgroundImage = "url(./static/images/lightoff.png)";
    }

    else if (value == "불켜줘") {
        text.innerHTML = "˘ᵕ˘"
        document.querySelector("body").style.backgroundColor = "white";
        document.getElementById("flog").style.backgroundImage = "url('./static/images/lighton.jpg')";
    }

    else {
        text.innerHTML = "???";
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2147503C57BBD6E619')";
    }
}