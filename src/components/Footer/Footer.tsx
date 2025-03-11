import { Container } from '@components/components.js';

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => (
  <footer className={className}>
    <Container>Footer</Container>
  </footer>
);
