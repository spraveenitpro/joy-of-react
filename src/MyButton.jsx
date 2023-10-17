import React from 'react'

function MyButton({ status, children }) {

    let themeColor;
    if (status === 'confirm') {
        themeColor = 'green';
    } else if (status === 'cancel') {
        themeColor = 'red'
    } else {
        themeColor = 'black'
    }
    return (
        <button style={{
            border: '2px solid',
            color: themeColor,
            borderColor: themeColor,
            background: 'white',
            borderRadius: 4,
            padding: 16,
            margin: 8,
        }}>
            {children}
        </button>
    )
}

export default MyButton