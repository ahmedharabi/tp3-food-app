import { Navbar, Container, Button } from 'react-bootstrap'

function MyNavbar(props) {
  return (
    <Navbar bg={props.darkMode ? 'dark' : 'warning'} variant={props.darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand className="fw-bold">🍕 Food App</Navbar.Brand>
        <Button
          variant={props.darkMode ? 'light' : 'dark'}
          onClick={() => props.setDarkMode(!props.darkMode)}
        >
          {props.darkMode ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
