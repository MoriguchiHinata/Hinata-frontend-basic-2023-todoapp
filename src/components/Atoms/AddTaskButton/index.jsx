import React from "react";
import styled from "styled-components";
import plusImg from "../../../assets/svg/plus.svg"
import COLOR from "../../../variables/color"
import FONT_FAMILY from "../../../variables/font_family"
import TEXTS from "../../../variables/texts"

const AddTaskButton = ({onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImg src={plusImg}/>
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  );
}
export default AddTaskButton;

const StyledButton = styled.button`
  background-color: ${COLOR.GREEN_TRANSPARENT};
  border: none;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 126px;
  height: 24px;

  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledText = styled.div`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXTS.S};
  color: ${COLOR.GREEN};
`;