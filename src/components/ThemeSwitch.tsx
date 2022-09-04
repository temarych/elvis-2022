import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";

type Mode = "dark" | "light";

interface ThemeSwitchProps {
  mode?: Mode;
  onChange?: (mode: Mode) => void;
}

const ThemeSwitch = ({ mode, onChange }: ThemeSwitchProps) => (
  <IconButton 
    onClick={() => {
      const newMode = mode === "dark" ? "light" : "dark";
      onChange && onChange(newMode);
    }}
  >
    {mode === "dark" ? (
      <LightModeIcon />
    ) : (
      <DarkModeIcon />
    )}
  </IconButton>
);

export default ThemeSwitch;