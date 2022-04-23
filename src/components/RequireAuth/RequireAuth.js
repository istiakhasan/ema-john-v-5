

import React from "react";

import { Navigate, useLocation } from "react-router-dom";

import useFirebase from "../../hook/useFirebase";

const RequireAuth = ({ children }) => {
  const { user } = useFirebase();

  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default RequireAuth;
