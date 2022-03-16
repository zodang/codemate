function Button({onClick, text}) {
    return (
        //props객체로부터 받아온 요소(onClick, text) 사용
        <button onClick={onClick}>{text}</button>
    )
}

export default Button