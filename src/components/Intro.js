
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import ags from "../assets/sosmed/Propil.png"
const Intro = () => {
    return(
    <div className="intro" >
              <Container className="text-light d-flex justify-content-center align-item-center">
                <Row>
                  <Col> 
                  <div className='mb-2 text-center'>
                  <Image 
                        src={ags} 
                        width="20%"
                        height="auto"
                        className="propil"/>
                    </div>
                  <div className="title">AGUS YULIANTO S.Kom.</div>
                  <div className="subtitle mt-2">[ WEB Developer ]</div>
                  <div className="introButton mt-2 mb-5 text-center">
                      <Button className="btn btn-success" href="https://api.whatsapp.com/send/?phone=%2B6281226827411&text&app_absent=0">Hubungi via WA</Button>
        
                  </div>
                  </Col>
                </Row>
              </Container>
            </div>
)
}
export default Intro