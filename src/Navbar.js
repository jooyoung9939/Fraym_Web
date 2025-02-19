import React from 'react'
import FraymLogo from './assets/images/logo_fraym.png'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const menuList = [
        { name: 'Shop', path: '/' },
        { name: 'NewStand', path: '/' },
        { name: 'Who we are', path: '/whoweare' },
        { name: 'My Favorites', path: '/' },
        { name: 'My Page', path: '/' }
    ];
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src={FraymLogo} alt={FraymLogo} className='logo'/>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li
                            key={menu.name}
                            className={menu.name === 'My Page' ? 'my-page' : ''}
                            onClick={() => navigate(menu.path)}
                            style={{cursor: 'pointer'}}
                        >
                            {menu.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar