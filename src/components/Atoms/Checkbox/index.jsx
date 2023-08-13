import React from "react";
import styled from "styled-components";
import checkImg from "../../../assets/svg/check.svg"
import COLOR from "../../../variables/color"
import FONT_FAMILY from "../../../variables/font_family"
import TEXTS from "../../../variables/texts"

const Checkbox = ({onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={checkImg}></img>
    </StyledButton>
  );
}
export default Checkbox;

const StyledButton = styled.button`
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  padding: 0;
  width: 20px;
  height: 20px;

  & > img {
    display: none;
    width: 100%;
    height: 100%;
  }

  &:hover {
    & > img {
      display: inline-block;
    }
  }
`;