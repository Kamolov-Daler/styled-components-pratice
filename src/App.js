import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #000;
  color: ${props => props.color || props.theme.colors.primary};
`;

function App() {

  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="green">Console cmd 2000. @kamolov</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button outlined color="green" align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
