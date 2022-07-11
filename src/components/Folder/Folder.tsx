import { FC } from "react";

interface FolderProps {
  className?: string;
}

const Folder: FC<FolderProps> = ({ className }) => {
  return <div className={className}>Folder Placeholder</div>;
};

export default Folder;
