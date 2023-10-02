import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    const alertStateCpy = Object.assign({}, alertState);
    alertStateCpy.visible = true;
    alertStateCpy.errorText = errorText;
    setAlertState(alertStateCpy);
  };

  const closeAlert = () => {
    const alertStateCpy = Object.assign({}, alertState);
    alertStateCpy.visible = false;
    setAlertState(alertStateCpy);
  };

  const contextValue = {
    visible: alertState.visible,
    errorText: alertState.errorText,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
