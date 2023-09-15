import React from "react";
import styled from "styled-components";

import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  font-family: ${FONT_FAMILY.ROBOTO};
  ${TEXTS.L};
  color: ${COLOR.WHITE};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXTS.M}
  }
`;
