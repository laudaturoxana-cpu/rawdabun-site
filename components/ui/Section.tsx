import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'beige';
  id?: string;
}

export default function Section({ children, className = '', bgColor = 'white', id }: SectionProps) {
  const bgClass = bgColor === 'beige' ? 'bg-beige' : 'bg-white';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
