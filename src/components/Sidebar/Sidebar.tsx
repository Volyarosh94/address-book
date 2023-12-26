import { Dispatch, SetStateAction } from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextsmsIcon from "@mui/icons-material/Textsms";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import { SideBarItem } from "./SideBarItem";

interface Props {
  isSideBarExtended: boolean;
  setIsSideBarExtended: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ isSideBarExtended, setIsSideBarExtended }: Props) => {
  return (
    <div
      className={`${!isSideBarExtended ? "w-12" : "w-80"}  customMd:!flex ${
        isSideBarExtended ? "flex" : "hidden"
      } absolute h-full flex-col justify-between bg-main-gray transition-width ease-linear duration-150 z-20`}
    >
      <div className="flex flex-col">
        <SideBarItem
          icon={<PersonIcon />}
          text="People"
          isSideBarExtended={isSideBarExtended}
          link="/"
          setIsSideBarExtended={setIsSideBarExtended}
        />
        <SideBarItem
          icon={<TextsmsIcon />}
          text="What's New"
          isSideBarExtended={isSideBarExtended}
          link="whats-new"
          setIsSideBarExtended={setIsSideBarExtended}
        />
        <SideBarItem
          icon={<GroupIcon />}
          text="Groups"
          isSideBarExtended={isSideBarExtended}
          link="groups"
          setIsSideBarExtended={setIsSideBarExtended}
        />
      </div>
      <SideBarItem
        icon={<SettingsIcon />}
        text="Settings"
        isSideBarExtended={isSideBarExtended}
        link="settings"
        setIsSideBarExtended={setIsSideBarExtended}
      />
    </div>
  );
};
