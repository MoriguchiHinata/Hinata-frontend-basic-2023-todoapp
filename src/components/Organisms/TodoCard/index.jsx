import React, { useState, useEffect } from "react";
import { useAlertHandlerContext } from "../../contexts/alert_handler";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const AlertHandlerContext = useAlertHandlerContext();

  const TODO_STORAGE_KEY = "todoKey";
  const DEFAULT_TASK_LIST = [];

  useEffect(() => {
    const storedTaskList = localStorage.getItem(TODO_STORAGE_KEY);
    if (storedTaskList === null) {
      setTaskList(DEFAULT_TASK_LIST);
    } else {
      setTaskList(JSON.parse(storedTaskList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const taskListCpy = [...taskList];
    setTaskList(taskListCpy.filter((element, num) => num !== index));
  };

  const onTaskNameChange = (value, index) => {
    const taskListCpy = [...taskList];

    if (value === "") {
      setTaskList(taskListCpy.filter((_, num) => num !== index));
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
      window.setTimeout(() => AlertHandlerContext.closeAlert(), 5000);
    } else {
      taskListCpy[index].name = value;
      taskListCpy[index].initializing = false;
      setTaskList(taskListCpy);
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}></AddTaskButton>
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default TodoCard;
