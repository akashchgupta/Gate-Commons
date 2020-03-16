import React from "react";
import Home from "../screens/Home";

export default function SignIn({ username, password, error }) {
  return (
    <>{username == "Demo" && password == "Demo" ? <Home /> : error(true)}</>
  );
}
