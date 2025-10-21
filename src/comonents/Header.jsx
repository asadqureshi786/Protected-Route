import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

import logo from "../assets/img/logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="shadow-md border-gray-800  border-b-1">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12" >
              <h4 className="font-[600] text-[24px] text-primary">
                <i>P</i>
                <i>rotected Route</i>
              </h4>
              <ul className="text-[16px] flex justify-center gap-10 py-8">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/agents"
                  >
                    Agents
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/leads"
                  >
                    Leads
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/customization"
                  >
                    Customization
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/policy"
                  >
                    Add Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to="/admin/settings"
                  >
                    Settings
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className="cursor-pointer text-[18px]"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <LuLogOut />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
