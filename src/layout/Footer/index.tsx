import { Container, Typography, styled } from "@mui/material";

const RootContainer = styled(Container)(({ theme: { palette, spacing } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: `${spacing(2)}px 0px`,
  backgroundColor: palette.grey[100],
}));

function Footer(): React.ReactElement<{}> {
  return (
    <RootContainer>
      <Typography>Made with React with Vite | Copyright</Typography>
    </RootContainer>
  );
}

export default Footer;
