// @ts-nocheck
import GpustackLogoDark from '@/assets/images/ailinks-logo-dark.png';
import GpustackLogo from '@/assets/images/ailinks-logo.png';
import SmallLogo from '@/assets/images/small-logo.png';
import React from 'react';

const LogoIcon: React.FC = () => {
  return <img src={GpustackLogo} alt="logo" style={{ height: 38 }} />;
};

const LogoIconDark: React.FC = () => {
  return <img src={GpustackLogoDark} alt="logo" style={{ height: 38 }} />;
};

const SLogoIcon: React.FC = () => {
  return <img src={SmallLogo} alt="logo" style={{ height: 38 }} />;
};

export { LogoIcon, LogoIconDark, SLogoIcon };
