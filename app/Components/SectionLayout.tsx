"use client";

import React from 'react';


interface SecttionLayoutProps {
    children: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement>;
}

function SectionLayout({ children, ref }: SecttionLayoutProps) {
  return (
    <section style={{
        padding: '5rem 10rem',
    }}>
        {children}
    </section>
  )
}

export default SectionLayout;