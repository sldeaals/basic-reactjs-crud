import React, { memo, useMemo } from "react";
import Typography from "@mui/material/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import FolderIcon from "@mui/icons-material/FolderOutlined";
import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import CustomButton from "../../components/CustomButton";
import { useStyles } from "./styles";

interface EmptyTableProps {
  onClick: () => void;
  className?: string;
  label: string;
  buttonLabel: string;
}

const EmptyTable: React.FC<EmptyTableProps> = memo(
  ({ onClick, className, label, buttonLabel }) => {
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.wrapperBox} ${className || ""}`.trim(),
      [classes.wrapperBox, className]
    );

    return (
      <Box className={parentClass}>
        <SvgIcon className={classes.svgGroup}>{<FolderIcon />}</SvgIcon>
        <Typography>{label}</Typography>
        <CustomButton
          onClick={onClick}
          startIcon={<Add />}
          label={buttonLabel}
        />
      </Box>
    );
  }
);

export default EmptyTable;
