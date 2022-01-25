import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Footer = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    {children}
    This is the footer
  </div>
);

export default Footer;
