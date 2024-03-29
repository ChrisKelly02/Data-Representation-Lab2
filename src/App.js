import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/Home' element={<Content></Content>}></Route>
        <Route path='/Read' element={<Footer></Footer>}></Route>
        <Route path= '/Create' element={<Header></Header>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
