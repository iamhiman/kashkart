import React from 'react';

export default function DetailsThumb(props) {
    return (
        <div className="thumb">
            {
                props.images.map((img, index) => (
                    <img src={img} alt="cover-pic" key={index} onClick={() => props.setIndex(index)} />
                ))
            }
        </div>
    )
}
