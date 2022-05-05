
import {Card, Container, Row, Col, Image} from "react-bootstrap" 
import ags from "../assets/bg/Slide1.PNG"
const Skills = () => {

    return (
        <div className="skills">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#000000" fill-opacity="1" d="M0,256L40,229.3C80,203,160,149,240,160C320,171,400,245,480,256C560,267,640,213,720,170.7C800,128,880,96,960,112C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> 
            <Container>
                <br/>
                <br/>
                <h1 className="text-white">SKILLS</h1>
                <Row>
                    <Col md={4} className="skillWrapper" id="skills">
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
          
        </div>
 )
} 

export default Skills