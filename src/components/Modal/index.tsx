import React, { ReactNode, useCallback, useMemo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Toolbar,
  Button,
  Box,
  Typography,
} from "@mui/material";
import AppBar from "@material-ui/core/AppBar";
import Close from "@mui/icons-material/Close";
import Body from "../Body";
import Footer from "../Footer";
import { ModalProps as BaseModalProps } from "../../types";
import { useStyles } from "./styles";

interface ModalProps extends BaseModalProps {
  title?: string;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const Modal: React.FC<ModalProps> = React.memo(
  ({ onClose, className, open, title, header, children, footer }) => {
    const classes = useStyles();

    const parentClass = useMemo(() => `${className || ""}`.trim(), [className]);

    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <Dialog
        className={parentClass}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <AppBar className={classes.headerContainer} position="sticky">
          <Box className={classes.topToolBar}>
            {title && (
              <Typography className={classes.mobileTitle}>{title}</Typography>
            )}
            <Button
              className={classes.closeButton}
              variant="text"
              onClick={handleClose}
            >
              <Close />
            </Button>
          </Box>
          <Toolbar>
            {title && (
              <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
            )}
            {header}
          </Toolbar>
        </AppBar>
        {children && (
          <Body>
            <DialogContent className={classes.dialogContent}>
              {children}
            </DialogContent>
          </Body>
        )}
        {footer && (
          <Footer>
            <DialogActions className={classes.customDialogActions}>
              {footer}
            </DialogActions>
          </Footer>
        )}
      </Dialog>
    );
  }
);

export default Modal;
