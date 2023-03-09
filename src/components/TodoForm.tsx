import React, { useState } from 'react';

/*
    새 항목을 등록할 수 있는 컴포넌트
*/

function TodoForm() {
    const [value, setValue] = useState('');

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        //  TODO : 새 항목 생성하기
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={value}
                    placeholder="무엇을 하실 건가요?"
                    onChange={e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;