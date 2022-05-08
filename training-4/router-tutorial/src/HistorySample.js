import React from 'react';
import { useNavigate } from 'react-router-dom'
import { usePrompt } from './Blocker'

function HistorySample() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goHome = () => {
        navigate('/');
    };

    usePrompt('현재 페이지를 벗어나시겠습니까?', true);

    return (
        <div>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;