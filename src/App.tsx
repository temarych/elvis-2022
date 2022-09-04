import styled from "styled-components";
import { createTheme, CssBaseline, Experimental_CssVarsProvider, ThemeOptions, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import GlobalStyle from "./GlobalStyle";
import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import TMDB from "./helpers/TMDB";
import Movie from "./models/Movie";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { AppState, store } from "./store/store";
import { deepmerge } from '@mui/utils';
import createThemeOptions from "./theme/createThemeOptions";
import MovieShowcase from "./components/MovieShowcase";

export default function App() {
  const mode = useSelector((state: AppState) => state.modeState.mode);
  const language = useSelector((state: AppState) => state.languageState.language);

  const [ movie, setMovie ] = useState<Movie>();

  useEffect(() => {
    TMDB.getMovie(614934, language).then(setMovie);
  }, [ language ]);

  const theme = useMemo(() => {
    const options = createThemeOptions(mode);
    return createTheme({ ...options });
  }, [ mode ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Header />
      <App.Wrapper>
        {movie && (
          <MovieShowcase 
            movie={movie}
          />
        )}
      </App.Wrapper>
    </ThemeProvider>
  );
}

App.Wrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;