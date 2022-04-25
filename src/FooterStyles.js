import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'


export const Box = styled.div`
  padding: 250px 60px;
  top: 1000px;
  background: black;
  position: absolute;
  
  width: 100%;
 background: #1E2833; 
  
   
//   @media (max-width: 1000px) {
//     padding: 70px 30px;
     
//   }
// `;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;

`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
                           
  }
`;
   
export const FooterLink = styled.a`
position: absolute;
left: 1600px;
top: 3px;
right: 10px;
  color: #fff;
  margin-bottom: 20px;
  margin-bottom: -80px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: green;
      transition: 200ms ease-in;
      
  }
`;
   
export const Heading = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: -250px;
  font-weight: bold;
 
  
`;
