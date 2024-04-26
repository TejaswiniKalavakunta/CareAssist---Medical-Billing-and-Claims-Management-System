import React from "react";
import { faClipboard, faListAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Common/Sidebar";

const InsuranceCompanySidebar = ({ handleSidebarOptionClick }) => {
  const companyLinks = [
    {
      label: "Claim",
      icon: faClipboard,
      action: "/claim",
    },
    {
      label: "Insurance Plans",
      icon: faListAlt,
      action: "/insurance-plans",
    },
  ];
  return (
    <Sidebar
      options={companyLinks}
      handleSidebarOptionClick={handleSidebarOptionClick}
    />
  );
};

export default InsuranceCompanySidebar;
