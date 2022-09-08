import React, { useState } from 'react';
import './Modal.scss';

const Modal = (props) => {
    const { isModalOpen, modalContent, modalHeight } = props;
    const [modalClasses, setModalClasses] = useState([
        'Modal_container',
        'modal_invisible',
    ]);

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            setModalClasses(['Modal_container', 'modal_open']);
        } else {
            document.body.style.overflow = 'auto';
            setModalClasses(['Modal_container', 'modal_close']);
        }
    }, [isModalOpen]);

    return (
        <div
            className={modalClasses.join(' ')}
            style={{ '--modal-height': modalHeight }}
        >
            <div className='backdrop' />
            <div className='content'>{modalContent}</div>
        </div>
    );
};

export default Modal;
