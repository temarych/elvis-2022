import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface SwitchProps {
  values: string[];
  value: string;
  onChange?: (value: string) => void
}

const Switch = ({ value, values, onChange }: SwitchProps) => {
  return (
    <ToggleButtonGroup 
      exclusive 
      value={value} 
      onChange={(_event, value) => {
        onChange && onChange(value);
      }}
    >
      {values.map(value => (
        <ToggleButton 
          key={value} 
          value={value}
        >{value}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default Switch;