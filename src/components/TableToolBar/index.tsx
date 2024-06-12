import React, { ReactNode, memo, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { useStyles } from './styles';

export interface TableToolBarProps {
  className?: string;
  title: string;
  children?: ReactNode;
}

const TableToolBar: React.FC<TableToolBarProps> = memo(
  ({ className, title, children }) => {
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.tableToolBar} ${className || ''}`.trim(),
      [classes.tableToolBar, className],
    );

    return (
      <Toolbar className={parentClass} role="toolbar">
        <Typography className={classes.title} variant="h6" role="heading">
          {title}
        </Typography>
        {children && <>{children}</>}
      </Toolbar>
    );
  },
);

export default TableToolBar;
