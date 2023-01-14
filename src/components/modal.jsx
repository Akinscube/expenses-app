import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/modal.css";
import { saveExpense } from "../helper/firebase/transactions/expenses";

const Modal = (props) => {
  const {isDisabled, input, setInput, children, toggleModal, isOpen } = props;


  const dispatch = useDispatch()
  const customSaveHook = saveExpense(dispatch)

  const userStatus = useSelector(state => state.auth.userStatus)


  console.log(input)

  return (
    <div>
      <button className="new-expense" onClick={toggleModal}>+ New Expense</button>
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
                <button form="form-id" disabled className="modal-save">
                  Save
                </button>
              ) : (
                <button
                  form="form-id"
                  type="submit"
                  onClick={(e) => {
                    toggleModal();
                    customSaveHook(e, input.title, input.date, input.amount, userStatus.user.uid, setInput)
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
