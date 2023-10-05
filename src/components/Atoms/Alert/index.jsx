import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const Alert = ({ isActive, alertText }) => {
  return <StyledAlert isActive={isActive}>{alertText}</StyledAlert>;
};

const StyledAlert = styled.div`
  opacity: ${({ isActive }) => (isActive ? `1` : `0`)};
  top: ${({ isActive }) => (isActive ? `80px` : `0px`)};
  position: absolute;
  /* left: 50%;
  transform: translate(-50%, 0); */
  transition: 0.5s ease-out;
  font-family: ${FONT_FAMILY.NOTO_SANS};
  color: ${COLOR.WHITE};
  ${TEXTS.S}
  background-color: ${COLOR.RED};
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
  max-width: 400px;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: ${({ isActive }) => (isActive ? `40px` : `0px`)};
    margin: 0 20px;
    width: calc(100% - 40px);
  }
`;

export default Alert;
