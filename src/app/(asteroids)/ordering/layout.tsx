import { NonEmptyCartProvider } from './_components';

interface OrderingLayoutProps {
  children: React.ReactNode;
}

export default function OrderingLayout({ children }: OrderingLayoutProps) {
  return (
    <NonEmptyCartProvider>
      {children}
    </NonEmptyCartProvider>
  );
}
