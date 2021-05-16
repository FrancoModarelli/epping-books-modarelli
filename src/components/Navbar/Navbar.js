import { useState } from 'react';
import './Navbar.css';
import CartWidget from '../Cart/CartWidget'
import { MenuItems } from './MenuItems';
import { Brand } from './Brand';

const Navbar = () => {

    //Menu responsive
    const [responsive,setResponsive] = useState(false);

    const handleClick = () => {
        //cambia el logo de hambuguesa a X y viceversa
        setResponsive(!responsive);
    } 

    return(
        <nav className='NavbarItems'>
            <Brand />
            <div className='menu-icon' onClick={handleClick}>
                <i className={responsive ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={responsive ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) =>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar