import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../nav.css";
import axios from "axios";
import { Card } from 'react-bootstrap'
import FigureCaption from 'react-bootstrap/FigureCaption'
import FigureImage from 'react-bootstrap/FigureImage'
import Figure from 'react-bootstrap/Figure'
import {Box,Container,Row,Column,FooterLink,Heading,} from "../FooterStyles";
import api from '../api'




export default class Navbarcomponentes extends Component {

  state={
  
    livro:"",

  }

  async componentDidMount () {
  
  const response = await api.get('https://fakerapi.it/api/v1/books');
  
  console.log(response.data)
  
  this.setState({livro:response.data})

  
  }  


  


  render() {
    const {livro} = this.state;
      

   

    return (
      <div>


{/* <h1>lista</h1>
<ul>
{livro.map(livro => (

<li key={livro.id}><h2>titulo:{livro.tittle}</h2>


</li>


)) }</ul>  */}

        
        <Navbar className="justify-content-center"   bg="light" variant ={"light"} expand="lg">
      <container>
      <Navbar.Brand className='logo'>Bibble</Navbar.Brand>
       
        <Navbar.Toggle   aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links" style={{left:'1000px'}} >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#team">team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </container>
    </Navbar>
    










    <Card className='carta' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>
            <Card className='carta1' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
             <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>
            <Card className='carta2' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>
            <Card className='carta3' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>

            <Card className='carta4' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>
            <Card className='carta5' style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>nome</Card.Title>
        <Card.Text>
      info
        </Card.Text>
        <Button variant="primary">Genero</Button>
        </Card.Body>
            </Card>
     




        <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">
              <i className="face">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="inst">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="twe">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
       
            <FooterLink href="#">
           
              <i className="you">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
              </FooterLink>
       
       <FooterLink href="#">
      
         <i className="linha">
           <span style={{ marginLeft: "10px" }}>
             ______________________________________________________________________________________________________________________________________________________________________________________________________________
           </span>
         </i>
         </FooterLink>
       
       <FooterLink href="#">
      
         <i className="termo">
           <span style={{ marginLeft: "10px" }}>
           Terms & Conditions
           </span>
         </i>
         </FooterLink>
       
       <FooterLink href="#">
      
         <i className="pri">
           <span style={{ marginLeft: "10px" }}>
           Privacy Policy
           </span>
         </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>


            
    </div>
    );
  };
};
