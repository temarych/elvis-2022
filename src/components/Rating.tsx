import { Typography } from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import styled from "styled-components";

interface RatingProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => {
  return (
    <Rating.Wrapper rating={value}>
      <Typography variant="h5" fontWeight="bold">
        {value.toPrecision(2)}
      </Typography>
    </Rating.Wrapper>
  );
};

Rating.Wrapper = styled.div<{ rating: number }>`
  border-radius: 1em;
  padding: 1em;
  border: .2em solid ${({ rating }) => (
    rating <= 3 ? red[300] :
    rating <= 6 ? yellow[300] :
    green[300]
  )};
  backdrop-filter: opacity(0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
`;

export default Rating;