// checkboxItem.tsx
import React from 'react';

interface CheckboxItemProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ label, isChecked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
};

export default CheckboxItem;
