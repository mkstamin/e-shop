import React, { useState } from 'react';
import Wrapper from './ProductImages.style';

const ProductImages = ({ images = [{ url: '', id: '' }] }) => {
    const [main, setMain] = useState(images[0]);
    return (
        <Wrapper>
            <img src={main.url} alt="main_image" className="main" />
            <div className="gallery">
                {images.map((img, i) => {
                    const { id, url, filename } = img;
                    return (
                        <img
                            src={url}
                            alt={filename}
                            key={id}
                            onClick={() => setMain(images[i])}
                            role="presentation"
                            className={`${url === main.url ? 'active' : null}`}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

export default ProductImages;
