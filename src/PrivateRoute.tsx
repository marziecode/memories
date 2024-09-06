import React from "react";
import { Navigate } from "react-router-dom";

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
