import { AsteroidFullInfo } from './_sections';

interface AsteroidPageProps {
  params: {
    id: string
  }
}

export default function AsteroidPage({ params }: AsteroidPageProps) {
  return <AsteroidFullInfo params={params} />;
}
