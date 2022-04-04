import { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: #000;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
      border: 1px solid red;
  }
  @media ${props => props.theme.media.tablet} {
      border: 1px solid green;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C/Users/KamolovD>"]);

  const onKeypress = (e) => {
      console.log(e.target.value)
    if (e.charCode == 13) {
      setLines([...lines, "C/Users/KamolovD>"]);
      return;
    }
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map((line, idx) => (
          <Line color={color} key={idx}>
            {line}
          </Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeypress} color={color} {...props} />
    </Flex>
  );
};

export default Console;
