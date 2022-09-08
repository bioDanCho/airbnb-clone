import React, { useState } from 'react';
import './Modal.scss';

const Modal = (props) => {
    const { isModalOpen, closeModal, modalContent, modalHeight } = props;
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

    const handleCloseClick = () => {
        closeModal();
    };

    return (
        <div
            className={modalClasses.join(' ')}
            style={{ '--modal-height': modalHeight }}
        >
            <div className='backdrop' />
            <div className='content'>
                <button onClick={handleCloseClick}>close</button>
                <h1>{modalContent.text}</h1>
            </div>
        </div>
    );
};

export default Modal;
