import React from 'react';
import { CreateAnimation } from '@ionic/react';

const WishlistsPage = () => {
    return (
        <div style={{ position: 'relative' }}>
            <CreateAnimation
                duration={5000}
                fromTo={{
                    property: 'opacity',
                    fromValue: '0',
                    toValue: '1',
                }}
                play={true}
            >
                <h1>WishlistsPage</h1>
            </CreateAnimation>
        </div>
    );
};

export default WishlistsPage;
