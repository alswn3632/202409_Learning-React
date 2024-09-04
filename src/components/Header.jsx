import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>Header.jsx Area</div>
            {/* 네이게이션 바 처럼 a태그에 링크를 설정하면 해당 컴포넌트로 이동 */}
            {/* 이를 위해선 npm i react-router-dom을 설치해줘야 함. */}
            {/* <Link to='컴포넌트명'>test</Link> */}
            {/* import {Link} from 'react-router-dom'; 도 해줘야함 */}
            <Link to='/'>Home</Link>
            <Link to='/test'>Test</Link>
            <Link to='/test2'>Test2</Link>
            <Link to='/test3'>Test3</Link>
            <Link to='/test4'>Test4</Link>
        </div>
    );
};

export default Header;