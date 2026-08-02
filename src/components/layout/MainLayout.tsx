import type { PropsWithChildren } from 'react';
import './MainLayout.css';

type MainLayoutProps = PropsWithChildren<{
  subtitle?: string;
}>;

export function MainLayout({ children, subtitle = 'React PWA starter architecture' }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <span className="main-layout__brand">Tedix Hunt</span>
        <span className="main-layout__subtitle">{subtitle}</span>
      </header>
      <main className="main-layout__main">{children}</main>
    </div>
  );
}
