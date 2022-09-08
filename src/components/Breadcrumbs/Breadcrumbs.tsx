import { FC } from "react";
import { formatBreadcrumbs } from './breadcrumbsUtil';

interface BreadcrumbsProps {
  className?: string;
  inputItems: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className, inputItems }) => {
  const formattedInputItems = formatBreadcrumbs(inputItems);

  return <div className={className}>{ formattedInputItems.join(' / ') }</div>;
};

export default Breadcrumbs;
