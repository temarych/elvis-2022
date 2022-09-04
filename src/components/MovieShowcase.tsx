import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import TMDB from "../helpers/TMDB";
import Image from "../models/Image";
import Movie from "../models/Movie";
import ClampTypography from "./ClampTypography";
import Rating from "./Rating";
import Slider from "./Slider";

interface MovieShowcaseProps {
  movie: Movie;
}

const MovieShowcase = ({ movie }: MovieShowcaseProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [ image, setImage ] = useState<string>();
  const [ backdrops, setBackdrops ] = useState<string[]>([]);

  useEffect(() => {
    if (!movie) return;
    const image = TMDB.getImage(movie.poster_path);
    setImage(image);
  }, [ movie ]);

  useEffect(() => {
    if (!movie) return;
    async function updateBackdrops() {
      const backdrops = await TMDB.getBackdrops(movie.id);
      setBackdrops(backdrops.map(backdrop => TMDB.getImage(backdrop.file_path)));
    }
    updateBackdrops();
  }, [ movie ]);

  return (
    <MovieShowcase.Wrapper isMobile={isMobile}>
      <MovieShowcase.Poster src={image} />
      <MovieShowcase.InfoWrapper>
        <Slider images={backdrops} />
        <MovieShowcase.Header>
          <Stack flexDirection="column" justifyContent="flex-start">
            <Typography variant="h3" fontWeight="bold">
              {movie.title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {movie.tagline}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="flex-end">
            <Rating value={movie.vote_average} />
          </Stack>
        </MovieShowcase.Header>
        <ClampTypography variant="h6">
          {movie.overview}
        </ClampTypography>
      </MovieShowcase.InfoWrapper>
    </MovieShowcase.Wrapper>
  );
};

MovieShowcase.Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;

MovieShowcase.InfoWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex: 1;
`;

MovieShowcase.Poster = styled.img`
  border-radius: 2em;
  width: 100%;
`;

MovieShowcase.Wrapper = styled.div<{ isMobile: boolean }>`
  padding: 1em;
  width: 100%;
  max-width: 50em;
  ${({ isMobile }) => (
    isMobile ? css`
      display: flex;
      gap: 2em;
      flex-direction: column;
    ` : css`
      display: grid;
      grid-gap: 2em;
      grid-template-columns: 2fr 4fr;
    `
  )}
`;

export default MovieShowcase;