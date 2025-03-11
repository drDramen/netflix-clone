import { type IconName, iconNameToIcon } from './common.js';

type Props = {
  iconName: IconName;
  className?: string;
};

export const Icon = ({ iconName, className }: Props) => {
  const SvgIcon = iconNameToIcon[iconName];

  return <SvgIcon className={className} />;
};
