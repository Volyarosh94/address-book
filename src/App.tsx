import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Contacts } from "@/pages/Contacts";
import { WhatsNew } from "@/pages/WhatsNew";
import { Groups } from "@/pages/Groups";
import { Settings } from "@/pages/Settings";
import { ContactInfo } from "@/pages/ContactInfo";

export const App = () => {
  const [isSideBarExtended, setIsSideBarExtended] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header
        toggleSidebar={setIsSideBarExtended}
        isSideBarExtended={isSideBarExtended}
      />
      <div className="flex w-full h-[calc(100%-48px)] relative">
        <Sidebar
          isSideBarExtended={isSideBarExtended}
          setIsSideBarExtended={setIsSideBarExtended}
        />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
