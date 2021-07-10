import React from 'react';

interface IColorsProps {
    colors: Array<string>;
}

const Colors: React.FunctionComponent<IColorsProps> = (props) => {
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

export default Colors;
