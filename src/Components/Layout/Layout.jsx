/* eslint-disable no-unused-vars */
import Scene from "../ThreeDComponents/Scene/Scene";
import { useContext, useEffect, useState } from "react";
import state from "../store";
import "./Layout.css";
import { useSnapshot } from "valtio";

const Layout = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <div className="layout">
        <div className="header">
          <div className="treedworld">
            <Scene />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
