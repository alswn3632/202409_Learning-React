import React from 'react';

// const Test4 = (props) => {
//     return (
//         <div className='test4'>
//             <h1 style={{color:props.color}}>Hello ~~ !! {props.name} </h1>
//         </div>
//     );
// };

const Test4 = ({name, color}) => { // 구조 분해 할당 방식 (자체에서 구조분해)
    return(
        <div className='test4'>
            <h1 style={{color}}>Hello ~~ !! {name} </h1>
        </div>
    )
}

// props를 지정하고 값이 들엉오지 않을 경우 빈 값으로 처리
// defaultProps로 기본값 설정할 수 있다.

Test4.defaultProps = {
    name : '메롱',
    color : 'blue'
}

export default Test4;