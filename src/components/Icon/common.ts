import NetflixFullLogo from '@assets/img/icons/netflix-full-logo.svg?react';

type IconName = 'netflixFullLogo';
type IconNameToIconMap = Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>>;

const iconNameToIcon: IconNameToIconMap = {
  netflixFullLogo: NetflixFullLogo,
};

export { type IconName, iconNameToIcon };
