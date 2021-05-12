import React from 'react'
import './Buttons.css'

const STYLES = [
    'btn--primary',
    'btn--outlines'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const ButtonSignUp = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) =>{

        //chequea que si no tiene style puesto coloque el primero del array
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

        //chequea que si no tiene size puesto, ponga el primero del array
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return(
            <button id='btnSignUp' className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        )
}