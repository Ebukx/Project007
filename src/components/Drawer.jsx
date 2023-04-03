import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";

export default function Drawer({ setShowMenu }) {
  return (
    <div className="drawer">
      <div className="py-3 px-2">
        <div className="d-flex justify-content-end">
          <AiOutlineClose
            color="white"
            size="1.5rem"
            onClick={() => setShowMenu(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Sidebar setShowMenu={setShowMenu}/>
      </div>
    </div>
  );
}
