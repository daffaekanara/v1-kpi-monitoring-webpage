import React from 'react'

    const STYLES = ['hbtn--primary', 'hbtn--outline']

    const SIZES = ['hbtn--medium', 'hbtn--large', 'hbtn--mobile', 'hbtn--wide']

    const COLORS = ['hprimary', 'blue', 'red', 'green']

    export const Button = ({ 
        children, 
        type, 
        onClick, 
        buttonStyle, 
        buttonSize, 
        buttonColor
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
        const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0]

        return (
            <button className={
                `btn & {checkButtonStyle} 
                & {checkButtonSize} &
                 {checkButtonColor}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        )
    }

    export default Button

