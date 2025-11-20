'use client';

import { CVResume } from '@/components/CVResume';

export default function CVPage() {
  return (
    <div className="relative overflow-hidden py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CVResume />
      </div>
    </div>
  );
}



