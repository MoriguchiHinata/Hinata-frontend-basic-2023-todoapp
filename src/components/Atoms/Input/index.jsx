import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  const onEnterPush = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener("blur", () => {
      onEditComplete(inputRef.current.value);
    });
    inputRef.current.addEventListener("keydown", (e) => onEnterPush(e));
  }, []);

  return <StyledInput ref={inputRef} type="text" />;
};

export default Input;

const StyledInput = styled.input`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXTS.S}
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  padding: 0px 4px;
  width: 100%;
  max-width: 100%;
  height: 20px;

  &:focus {
    outline: none;
  }
`;
