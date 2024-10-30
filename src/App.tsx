import { Container, Typography } from "@mui/material"
import Header from "./Components/Header/Header"


export const App = () => {
  return (
    <Container>
      <Header/>
      <Typography variant="h1">Hello world</Typography>
    </Container>
  )
}
