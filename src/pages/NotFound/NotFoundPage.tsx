import { Link } from 'react-router';

import { Container } from '@components/components.js';

export const NotFoundPage = () => {
  return (
    <Container className="flex h-full items-center justify-center">
      <Link
        className="rounded-lg bg-gray-100 px-6 py-3 text-4xl uppercase text-gray-500 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700"
        to=".."
      >
        Back to Home
      </Link>
    </Container>
  );
};
