import { AppBar, Stack, useScrollTrigger } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLanguage } from "../store/reducers/languageReducer";
import { setMode } from "../store/reducers/modeReducer";
import { AppState } from "../store/store";
import Switch from "./Switch";
import ThemeSwitch from "./ThemeSwitch";

type Language = "en" | "uk";

const Header = () => {
  const mode = useSelector((state: AppState) => state.modeState.mode);
  const languageSerialized = useSelector((state: AppState) => state.languageState.language);

  const dispatch = useDispatch();
  const languages = [ "EN", "UA" ];

  const serializeLanguage = (language: "EN" | "UA") => {
    const languageDictionary = { EN: "en", UA: "uk" };
    return languageDictionary[language] as "en" | "uk";
  }

  const unserializeLanguage = (language: "en" | "uk") => {
    const languageDictionary = { en: "EN", uk: "UA" };
    return languageDictionary[language] as "EN" | "UA";
  }

  const language = unserializeLanguage(languageSerialized);

  return (
    <AppBar>
      <Stack 
        justifyContent="space-between" 
        alignItems="center" 
        flexDirection="row"
      >
        <Switch 
          values={languages} 
          value={language}
          onChange={language => {
            const languageSerialized = serializeLanguage(language as "EN" | "UA");
            dispatch(setLanguage(languageSerialized));
          }}
        />
        <ThemeSwitch 
          mode={mode}
          onChange={mode => {
            dispatch(setMode(mode));
          }}
        />
      </Stack>
    </AppBar>
  );
};

export default Header;