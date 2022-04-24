import styled from "styled-components";
import { connect } from "react-redux";
import { togglePostModal } from "../actions";
import { useState } from "react";

const PostModal = (props) => {
  // later after making login component
  // const [img, setImg] = useState();
  const [caption, setCaption] = useState("");
  const handleClose = (e) => {
    e.preventDefault();
    props.toggleModal();
  };
  return (
    <>
      <Container style={props.display}>
        <Modal>
          <ModalHeader>
            <h1>Create Post</h1>
            <button onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </ModalHeader>
          <CreatePost>
            <ActorInfo>
              {props.user ? (
                <>
                  <img src={props.user.photoURL} alt="" />
                  <div>
                    <span>{props.user.displayName}</span>

                    <button>
                      <i className="fa-solid fa-user-group"></i>
                      Friends
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt=""
                  />
                  <div>
                    <span>Name</span>

                    <button>
                      <i className="fa-solid fa-user-group"></i>
                      Friends
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </>
              )}
            </ActorInfo>
            {props.user ? (
              <textarea
                placeholder={`What's on your mind? ${
                  props.user.displayName.split(" ")[0]
                }`}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                cols="30"
                rows="5"
              ></textarea>
            ) : (
              <textarea
                placeholder="What's on your mind? Name"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                cols="30"
                rows="5"
              ></textarea>
            )}
            <ImgPost>
              <small>Add your Post</small>
              <label htmlFor="upload__img">
                <i className="fa-solid fa-image"></i>
                Upload a picture
              </label>
            </ImgPost>
            <input
              type="file"
              name="upload__img"
              accept="image/png, image/gif, image/jpeg"
              id="upload__img"
              onC
              style={{ display: "none" }}
            />
            <PostImg>
              <div>
                <img src="https://wallpapercave.com/wp/wp7992445.jpg" alt="" />
              </div>
            </PostImg>
            <input
              type="submit"
              value="Post"
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked");
              }}
              disabled={caption.length === 0}
              style={{
                backgroundColor: caption.length === 0 ? "lightblue" : "#1b74e4",
              }}
            />
          </CreatePost>
        </Modal>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.form`
  border-radius: 12px;
  background-color: white;
  position: relative;
  max-width: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const ModalHeader = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  h1 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0px;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 6px 10px;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
    i {
      font-size: 18px;
      color: gray;
    }
  }
`;
const ActorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 14px;
      font-weight: bold;
    }
    button {
      display: flex;
      gap: 5px;
      padding: 5px;
      font-size: 12px;
      border: none;
      border-radius: 8px;
      &:hover {
        background-color: gray;
        cursor: pointer;
      }
    }
  }
`;
const CreatePost = styled.div`
  input {
    margin: 10px 0;
    padding: 12px 0;
    border: none;
    border-radius: 10px;

    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: white;
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }
  textarea {
    width: 100%;
    resize: none;
    height: 100%;
    border: none;
    font-size: 24px;
    outline: none;
    margin: 10px 0;
  }
`;
const ImgPost = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 15px 10px;
  border-radius: 12px;
  justify-content: space-between;
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: gray;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: lightgray;
    }
  }
`;

const PostImg = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    img {
      padding: 10px;
      height: 150px;
      max-width: 500px;
      object-fit: contain;
    }
  }
`;

const mapStateToProps = (state) => ({
  display: state.togglePostModalState,
  user: state.userState.user,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(togglePostModal("none")),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
