import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    // 4_4_useNavigate
    // 유저가 로그인해서 redirect 시키고 싶거나 
    // 유저가 어떤 페이지로 갔는데 접근 권한이 없거나 했을때 사용 
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about");
    }
    return (
        <header>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <button onClick={onAboutClick}>About</button>
            </ul>
        </header>
    );
}

