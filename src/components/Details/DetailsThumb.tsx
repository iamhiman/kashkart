import React from 'react';

interface IDetailsThumbProps {
    images: Array<string>;
    setIndex: (arg0: number) => void;
}

const DetailsThumb: React.FunctionComponent<IDetailsThumbProps> = (props) => {
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

export default DetailsThumb;
