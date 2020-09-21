import React from "react";
import { usePostModalStyles } from "../../styles";
import Modal from "react-modal";
import { useHistory, useParams } from "react-router-dom";
import Post from "./Post";

function PostModal() {
  const history = useHistory();
  const { postId } = useParams();
  console.log(postId, "PARAMS");
  const classes = usePostModalStyles();

  return (
    <>
      <Modal
        isOpen
        overlayClassName={classes.overlay}
        onRequestClose={() => history.goBack()}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            maxWidth: 935,
            width: "100%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            margin: 0,
            padding: 0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <Post id={postId} />
      </Modal>
    </>
  );
}

export default PostModal;
