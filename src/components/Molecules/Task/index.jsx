import { React, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index.jsx";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setEditing(false);
    onTaskChange(value);
  };

  const onEditButtonClick = () => {
    setEditing(true);
  };

  return (
    <StyledWrapper>
      <SytledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </SytledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 2px 6px;
  width: 100%;
  max-width: 100%;
`;

const SytledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-width: 0;
`;

const StyledTaskName = styled.div`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXTS.S}
  color: ${COLOR.LIGHT_GRAY};
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Task;
