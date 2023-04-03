import { Typography, Container } from "@mui/material";

import { Footer } from "./layout";
import Button from "./components/Button";
import { useCounterStore } from "./store";

function App() {
  const counterStore = useCounterStore((state) => state);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">
        Welcome to React StarterKit {counterStore.counter}
      </Typography>
      <Button onClick={() => counterStore.increase(5)}>Button</Button>
      <Footer />
    </Container>
  );
}

export default App;
