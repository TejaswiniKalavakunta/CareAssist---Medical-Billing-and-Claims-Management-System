// HealthcareSidebar.jsx
import React from "react";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Common/Sidebar";

const HealthcareSidebar = ({ handleSidebarOptionClick }) => {
  const healthcareLinks = [
    {
      label: "Invoice",
      icon: faFileInvoice,
      action: "/healthcare-invoice",
    },
  ];

  return (
    <Sidebar
      options={healthcareLinks}
      handleSidebarOptionClick={handleSidebarOptionClick}
    />
  );
};

export default HealthcareSidebar;
