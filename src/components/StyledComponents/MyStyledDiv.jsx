import styled from "styled-components";


const MyStyledDiv = styled.div`
  min-width: 500px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100px;
  color: black;
  margin: 25px;
`;

function Component({text}) {
  return <MyStyledDiv>{text}</MyStyledDiv>;
}

export default Component;