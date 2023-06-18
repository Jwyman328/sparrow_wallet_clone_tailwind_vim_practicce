import React from "react";
interface NavBlockProps {
  onClick: () => void;
  title: string;
}

const NavBlock = ({ onClick, title }: NavBlockProps) => {
  return (
    <div
      className="items-center justify-center flex text-center text-align-center cursor-pointer hover:bg-sky-700 bg-sky-500 w-full bg-primary-500 h-1/6 w-40"
      onClick={onClick}
    >
      <div>
        {/* TODO add an icon */}
        <p>{title}</p>
      </div>
    </div>
  );
};
interface NavBarProps {
  navBlocks: NavBlockProps[];
}
export const NavBar = ({ navBlocks }: NavBarProps) => {
  const createBlocks = () => {
    return navBlocks.map((navBlock) => {
      return <NavBlock onClick={navBlock.onClick} title={navBlock.title} />;
    });
  };
  return <div className="h-full w-2/12">{createBlocks()}</div>;
};
