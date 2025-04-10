// @ts-nocheck
import GpustackLogo from '@/assets/images/ailinks-logo.png';
import SmallLogo from '@/assets/images/small-logo.png';
import React from 'react';

const LogoIcon: React.FC = () => {
  return <img src={GpustackLogo} alt="logo" style={{ height: 24 }} />;
};
const SLogoIcon: React.FC = () => {
  return <img src={SmallLogo} alt="logo" style={{ height: 24 }} />;
};

export { LogoIcon, SLogoIcon };
