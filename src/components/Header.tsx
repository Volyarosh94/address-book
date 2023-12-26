import { Dispatch, SetStateAction } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
  isSideBarExtended: boolean;
}

export const Header = ({ toggleSidebar, isSideBarExtended }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="w-full h-12 flex items-center justify-start bg-main-blue text-white">
      <button
        className="w-12 h-full flex items-center justify-center hover:bg-[#3F88DC]"
        onClick={() => toggleSidebar(!isSideBarExtended)}
      >
        <MenuIcon />
      </button>
      {pathname === "/contact-info" && (
        <div className="block customMd:hidden" onClick={() => navigate(-1)}>
          <TransitEnterexitIcon
            sx={{ transform: "rotate(45deg)" }}
            fontSize="large"
          />
        </div>
      )}
      <h1 className="w-full flex items-center justify-start text-white font-light text-2xl pl-[5px] pt-1">
        Address Book
      </h1>
    </header>
  );
};
