
import {Card, Container, Row, Col, Image, Button} from "react-bootstrap" 
import ags from "../assets/bg/Slide1.PNG"
const Porto = () => {

    return (
        <div className="porto">
            <Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-white">Portofolio</h1>
                <Row>
                    <Col md={4} className="skillWrapper" id="porto">
                    <Card className="imgSkill bg-dark text-light shadow">
                        <Image 
                        src={ags} 
                        width="100%"
                        height="auto"
                        className="images"/>
                        <Card.Body  className="text-center">
                        <Card.Text>
                        <Button variant="outline-warning" href="https://sinergisubuh.com" >Cek Hasil</Button>
                            {/* <button className="btn btn-success" href="https://sinergisubuh.com" >Cek Hasil</button> */}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={4} className="skillWrapper">
                    <Card className="imgSkill bg-dark text-light shadow">
                        <Image 
                        src={ags} 
                        width="100%"
                        height="auto"
                        className="images"/>
                        <Card.Body  className="text-center">
                        <Card.Text>
                            Some quick asasda sda sda da asd asd asd asd as
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4} className="skillWrapper">
                    <Card className="imgSkill bg-dark text-light shadow">
                        <Image 
                        src={ags} 
                        width="100%"
                        height="auto"
                        className="images"/>
                        <Card.Body  className="text-center">
                        <Card.Text>
                            Some quick asasda sda sda da asd asd asd asd as
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#000000" fill-opacity="1" d="M0,0L40,37.3C80,75,160,149,240,192C320,235,400,245,480,218.7C560,192,640,128,720,133.3C800,139,880,213,960,208C1040,203,1120,117,1200,112C1280,107,1360,181,1400,218.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
             </div>
 )
} 

export default Porto