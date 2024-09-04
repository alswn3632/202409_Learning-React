import React from 'react';
import {student, students} from '../data/data'; // 다른 파일에 있는 데이터 가져와서 사용

const Student = () => {
    // 각각의 상수에 담아서 사용
    // const name = "홍길동";
    // const age = "20";
    // const addr = "서울";

    // 객체에 담아서 사용
    // const student = {
    //     name : "홍길순",
    //     age : 23,
    //     addr : "서울"
    // }
    
    return (
        <div className='student'>
        <h3>홍길동(20) : 서울</h3>        
        <h3>{student.name}({student.age}) : {student.addr}</h3>
        {
            students.map(s => ( 
                <h3>{s.name}({s.age}) : {s.addr}</h3>
            ))
        }
        </div>
    );
};

export default Student;