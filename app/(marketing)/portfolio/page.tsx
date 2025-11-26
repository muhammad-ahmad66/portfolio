'use client';

import { PortfolioWindow } from '@/components/PortfolioWindow';

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden pt-20 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <PortfolioWindow />
      </div>
    </div>
  );
}
