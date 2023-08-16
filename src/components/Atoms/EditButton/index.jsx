import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color"

const EditButton = ({onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={pencil}/>
    </StyledButton>
  );
};

export default EditButton;

const StyledButton = styled.button`
  background: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  border: none;
  border-radius: 50%;
  padding: 0;
  width: 20px;
  height: 20px;
  transition: 0.2s;

  &:hover {
    background: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    transition: 0.2s;
  }
  
  & > img {
    width: 100%;
    height: 100%;
  }
`;
