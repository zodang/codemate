function check_text() {
    var value = document.getElementById("console").value;

    if (value == "안녕") {
        console.log("^_^");
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2758CF3957BBD6D71F')";
    }
    else if (value == "잘가") {
        console.log("ㅜㅜ")
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/216EB13457BBD6DF2D')";
    }
    else if (value == "불꺼줘") {
        document.querySelector("body").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("flog").style.backgroundImage = "url(https://img.theqoo.net/img/mvFSv.jpg)";
    }

    else if (value == "불켜줘") {
        if (document.querySelector("body").style.backgroundColor == "white") {
            console.log("no...")
            document.getElementById("flog").style.backgroundImage = "url('https://img.theqoo.net/img/LhbIK.jpg')";
        }
        else {
            document.querySelector("body").style.backgroundColor = "white";
            document.getElementById("flog").style.backgroundImage = "url('https://image.librewiki.net/thumb/c/cd/Kermit-383368.jpg/450px-Kermit-383368.jpg')";
        }
    }

    else {
        console.log("???")
        document.getElementById("flog").style.backgroundImage = "url('https://t1.daumcdn.net/cfile/tistory/2147503C57BBD6E619')";
    }
}