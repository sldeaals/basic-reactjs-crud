import React, { memo, useMemo } from 'react';
import TableCell from '@material-ui/core/TableCell';
import FormField from '../FormField';

interface FormFieldCellProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
  value: any;
}

const FormFieldCell: React.FC<FormFieldCellProps> = memo(
  ({ className, label, value, onChange }) => {
    const parentClass = useMemo(() => `${className || ''}`.trim(), [className]);

    return (
      <TableCell className={parentClass} align="left" role="cell">
        <FormField label={label} value={value} onChange={onChange} />
      </TableCell>
    );
  },
);

export default FormFieldCell;
