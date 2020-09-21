import React from "react";
import { usePostModalStyles } from "../../styles";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

function PostModal() {
  const history = useHistory();
  const classes = usePostModalStyles();

  return (
    <>
      <Modal
        isOpen
        overlayClassName={classes.overlay}
        onRequestClose={() => history.goBack()}
      
      ></Modal>
    </>}

export default PostModal;
