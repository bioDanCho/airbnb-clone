import React, { useState } from 'react';
import './Modal.scss';

const Modal = (props) => {
    const { isModalOpen, closeModal, modalContent } = props;
    const [modalClasses, setModalClasses] = useState([
        'Modal_container',
        'modal_invisible',
    ]);

    React.useEffect(() => {
        if (isModalOpen) {
            setModalClasses(['Modal_container', 'modal_open']);
        }
    }, [isModalOpen]);

    const handleCloseClick = () => {
        setModalClasses(['Modal_container', 'modal_close']);
        closeModal();
    };

    return (
        <div className={modalClasses.join(' ')}>
            <button onClick={handleCloseClick}>close</button>
            <h1>{modalContent.text}</h1>
        </div>
    );
};

export default Modal;
