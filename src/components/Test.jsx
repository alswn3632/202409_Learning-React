
function Test(){
    // return 밖 영역 주석
    // 반드시 태그가 닫혀있어야 함!
    // ex. <input />, <br /> 처럼 단태그도 /로 마지막에 닫아줘야함. 닫지 않으면 오류 발생
    const name = 'React Test Component'
    const style = {
        color : "white",
        backgroundColor : "black",
        fontSize : "48px",
        padding : "16px"
    }
    return (
        <div className="test">
            {/* 주석이래용 :) */}
            {/* `${변수명}` => {변수명} */}
            <div style={style}>{name}</div>
        </div>
    );
}

export default Test;