import styled from "styled-components";
const RightSection = (props) => {
  return (
    <>
      <Container>
        <h1>This Right Section 💣 </h1>
        <h1>Group conversations</h1>
        <Group>
          <div>
            <i className="fa-solid fa-plus"></i>
          </div>
          <span>Create a new group</span>
        </Group>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 18px;
    color: gray;
  }
`;
const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin: 0px 8px;
    background-color: lightgray;
    padding: 5px 8px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }
`;

export default RightSection;
