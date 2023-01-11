import React, { useState } from "react";
import "../../assets/styles/components/modal.css";

const Modal = (props) => {
  const {isDisabled, handleSave, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleModal = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <button onClick={toggleModal}>New Expense</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h6>New Expense</h6>
              <p className="modal-exit" onClick={toggleModal}>
                &times;
              </p>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {isDisabled ? (
                <button form="form-id" type="submit" className="modal-save">
                  Save
                </button>
              ) : (
                <button
                  form="form-id"
                  type="submit"
                  onClick={() => {
                    toggleModal();
                    handleSave();
                  }}
                  className="modal-save"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
