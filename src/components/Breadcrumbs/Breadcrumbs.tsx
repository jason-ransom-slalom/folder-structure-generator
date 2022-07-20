import { FC } from "react";

interface BreadcrumbsProps {
  className?: string;
  inputItems: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className, inputItems }) => {
  return <div className={className}>{ inputItems.join(' / ') }</div>;
};

export default Breadcrumbs;
