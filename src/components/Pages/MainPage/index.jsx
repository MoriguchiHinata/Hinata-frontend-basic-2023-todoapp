import React from "react";
import TodoCard from "../../Organisms/TodoCard";
import Title from "../../Atoms/Title";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCardWrapper>
        <TodoCard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 60px 0 0 0;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px 0 0 0;
  }
`;

const StyledTodoCardWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  max-width: 500px;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 100%;
  }
`;
