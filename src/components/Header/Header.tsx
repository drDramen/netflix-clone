import { Link } from 'react-router';

import { AppRoute } from '@libs/enums/enums.js';
import { Container, Icon } from '@components/components.js';

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => (
  <header className={className}>
    <Container className="py-5">
      <Link to={AppRoute.ROOT}>
        <Icon iconName="netflixFullLogo" className="h-10 fill-red-800" />
      </Link>
    </Container>
  </header>
);
