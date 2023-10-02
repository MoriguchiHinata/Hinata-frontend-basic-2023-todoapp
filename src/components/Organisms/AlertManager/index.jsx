import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const { visible, errorText } = useAlertHandlerContext();

  return (
    <AlertWrapper>
      <Alert isActive={visible} alertText={errorText} />
    </AlertWrapper>
  );
};

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AlertManager;
