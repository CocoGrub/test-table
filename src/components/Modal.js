import React from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { getUsers, maxSource, minSource } from "../store/MainReducer";
import PropTypes from "prop-types";

const Modal = ({ modal, getUsers }) => {
  if (modal) {
    return createPortal(
      <div className={"modal"}>
        <div className={"center"}>
          <button
            className={"modal-button"}
            onClick={() => getUsers(minSource)}
          >
            Display little table
          </button>
          <button
            className={"modal-button"}
            onClick={() => getUsers(maxSource)}
          >
            Display BIG table
          </button>
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps, { getUsers })(Modal);
