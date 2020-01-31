import React from 'react'

export default function Button(props) {
    return (


        <div>
            <button
                onClick={ props.children}
            >{props.children}</button>
        </div>
    )
}
