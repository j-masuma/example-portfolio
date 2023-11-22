import Container from "react-bootstrap/esm/Container";


function Footer(){
    return(
       <div className="bg-dark text-white p-4">
         <Container >
            Copyright & Copy : {new Date().getFullYear()} | All Right Reserved by RIEAD
        </Container>
       </div>
    );
}

export default Footer;

