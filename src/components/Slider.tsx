import { Pagination, useTheme } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [ imageIndex, setImageIndex ] = useState(0);
  const image = images[imageIndex];
  return (
    <Slider.Wrapper>
      <Slider.Image src={image} />
      <Pagination 
        siblingCount={0}
        size="large"
        count={images.length} 
        page={imageIndex + 1} 
        onChange={(_event, pageIndex) => {
          setImageIndex(pageIndex - 1);
        }}
      />
    </Slider.Wrapper>
  );
}

Slider.Image = styled.img`
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  border-radius: 2em;
`;

Slider.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export default Slider;