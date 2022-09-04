import { Button, Typography, TypographyProps } from "@mui/material";
import { createRef, useEffect, useState } from "react";
import styled from "styled-components";

interface ClampTypographyProps extends TypographyProps {

}

const ClampTypography = (props: ClampTypographyProps) => {
  const [ isClamp, setIsClamp ] = useState<boolean>(true);
  return (
    <ClampTypography.Wrapper>
      <Typography 
        {...props}
        sx={isClamp ? { 
          display: "-webkit-box", 
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        } : {}} 
      />
      <Button 
        variant="outlined"
        size="large"
        onClick={() => setIsClamp(!isClamp)}
      >
        {isClamp ? "Show more" : "Show less"}
      </Button>
    </ClampTypography.Wrapper>
  );
};

ClampTypography.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`;

export default ClampTypography;