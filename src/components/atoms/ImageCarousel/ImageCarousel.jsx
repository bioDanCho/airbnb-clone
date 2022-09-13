import React from 'react';
import './ImageCarousel.scss';

import { IonSlides, IonSlide } from '@ionic/react';

const slideOpts = {
    initialSlide: 0,
    speed: 400,
};

const ImageCarousel = (props) => {
    const { images } = props;
    return (
        <div className='ImageCarousel_container'>
            <IonSlides pager={true} options={slideOpts}>
                {images.map((url, idx) => {
                    return (
                        <IonSlide>
                            <div
                                style={{
                                    '--url': `url(${url})`,
                                }}
                                className='slide_image'
                            ></div>
                        </IonSlide>
                    );
                })}
            </IonSlides>
        </div>
    );
};

export default ImageCarousel;
