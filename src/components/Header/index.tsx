import React, { ReactNode, memo, useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './styles';

export interface HeaderProps {
  className?: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = memo(({ className, children }) => {
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.appBar} ${className || ''}`.trim(),
    [classes.appBar, className],
  );

  return (
    <AppBar className={parentClass} position="sticky" role="banner">
      {children}
    </AppBar>
  );
});

export default Header;
