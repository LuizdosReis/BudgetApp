import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

const CustomModal = (props) => (
    <Modal
     isOpen={props.modelIsOpen}
     style={customStyles}
     onRequestClose={props.handleCloseModal}
     contentLabel={props.label}
    >
     {props.children}
    </Modal>
);
    
export default CustomModal;