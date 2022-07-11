import { FC } from "react";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
  return <div className={className}>Breadcrumbs Placeholder</div>;
};

export default Breadcrumbs;
