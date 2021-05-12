import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Brand } from './Brand';
import './Navbar.css';
import { ButtonSignUp } from '../Buttons/Button-SignUp';


class Navbar extends Component{

    state = {clicked: false}
    
    handleClick = () => {
        //cambia el logo de hambuguesa a X y viceversa
        this.setState({ clicked : !this.state.clicked})
    } 
    render(){
        return(
            <nav className='NavbarItems'>
                <Brand />
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
                <ButtonSignUp>Registrate</ButtonSignUp>
            </nav>
        )
    }
}

export default Navbar