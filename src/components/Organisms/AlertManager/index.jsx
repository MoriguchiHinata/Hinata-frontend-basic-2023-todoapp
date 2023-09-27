import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  return (
    <AlertWrapper>
      <Alert
        isActive={AlertHandlerContext.visible}
        alertText={AlertHandlerContext.errorText}
      />
    </AlertWrapper>
  );
};

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AlertManager;
