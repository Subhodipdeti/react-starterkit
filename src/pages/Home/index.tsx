import { Container, Typography, styled } from "@mui/material";
import React from "react";

const RootContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function Home(): React.ReactElement<{}> {
  return (
    <RootContainer>
      <Typography variant="h1">Welcome to React StarterKit</Typography>
    </RootContainer>
  );
}

export default Home;
