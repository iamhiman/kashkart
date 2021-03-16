import React from 'react';

export default function Colors(props) {
    return (
        <div className="colors">
            {
                props.colors.map((color, index) => (
                    <button key={index} style={{ background: color }}></button>
                ))
            }
        </div>
    )
}
