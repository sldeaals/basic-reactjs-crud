import React, { ReactNode, memo, useMemo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Check from '@mui/icons-material/Check';
import { useStyles } from './styles';

interface EditToolBarProps {
  onCancel?: () => void;
  onSave: () => void;
  className?: string;
  cancelLabel?: string;
  saveLabel: string;
  children?: ReactNode;
}

const EditToolBar: React.FC<EditToolBarProps> = memo(
  ({ onCancel, onSave, className, cancelLabel, saveLabel, children }) => {
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.topToolBar} ${className || ''}`.trim(),
      [classes.topToolBar, className],
    );

    return (
      <Box className={parentClass} role="toolbar">
        {children}
        {onCancel && (
          <Button
            className={classes.actionButton}
            variant="outlined"
            onClick={onCancel}
            aria-label={cancelLabel}
          >
            {cancelLabel && (
              <Typography className={classes.buttonLabel}>
                {cancelLabel}
              </Typography>
            )}
          </Button>
        )}
        <Button
          className={classes.actionButton}
          variant="contained"
          startIcon={<Check />}
          onClick={onSave}
          aria-label={saveLabel}
        >
          {saveLabel && (
            <Typography className={classes.buttonLabel}>{saveLabel}</Typography>
          )}
        </Button>
      </Box>
    );
  },
);

export default EditToolBar;
