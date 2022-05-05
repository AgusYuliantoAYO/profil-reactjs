
import {Card, Container, Row, Col, Image} from "react-bootstrap" 
import html from "../assets/icon/htmlOK.png"
import css from "../assets/icon/css.png"
import js from "../assets/icon/js.png"
import boots from "../assets/icon/bootstrap.png"
import react from "../assets/icon/react.png"
import ci from "../assets/icon/ci.png"
const Skills = () => {
    return (
        <div className="skills">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#000000" fill-opacity="1" d="M0,256L40,229.3C80,203,160,149,240,160C320,171,400,245,480,256C560,267,640,213,720,170.7C800,128,880,96,960,112C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> 
            <Container>
                <br/>
                <br/>
                <h1 className="text-white">SKILLS</h1>
                <Row>
                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={html} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={css} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={js} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={boots} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={react} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={2} className="skillWrapper" id="skills">
                    <Card className="imgSkill shadow align-items-center">
                        <Image 
                        src={ci} 
                        width="120px"
                        height="120px"
                        className="images"/>
                        <Card.Body  className="text-center">
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
          
        </div>
 )
} 

export default Skills