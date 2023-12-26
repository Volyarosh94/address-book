import { Dispatch, ReactElement, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

interface Props {
  icon: ReactElement;
  text: string;
  isSideBarExtended: boolean;
  link: string;
  setIsSideBarExtended: Dispatch<SetStateAction<boolean>>;
}

export const SideBarItem = ({
  icon,
  text,
  isSideBarExtended,
  link,
  setIsSideBarExtended,
}: Props) => {
  return (
    <Link
      to={link}
      className="flex h-12 items-center hover:bg-dark-gray"
      onClick={() => setIsSideBarExtended(false)}
    >
      <Button>{icon}</Button>
      <div
        className={`absolute left-[50px] ${
          isSideBarExtended ? "block" : "hidden"
        }`}
      >
        {text}
      </div>
    </Link>
  );
};
