import React from "react";
import { Navigate } from "react-router-dom";
import BottomMenu from "./components/bottomMenu/BottomMenu";
// import { AuthContext } from './App';

export function PrivateRoute({ Page }: { Page: React.ReactElement }) {
  const authenticated = true;

  if (authenticated) {
    return (
      <div className="flex flex-col ">
     
        {Page}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
