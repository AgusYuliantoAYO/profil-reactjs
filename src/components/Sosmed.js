import { Container, Image } from "react-bootstrap"
import github from "../assets/sosmed/github.png"
import ig from "../assets/sosmed/igOK.png"
import linkedn from "../assets/sosmed/linkedinOK.png"
const Sosmed = () => {
    return(
        <div className="sosmed" id="sosmed">
            {/* <div> */}
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#808080" fill-opacity="1" d="M0,0L40,37.3C80,75,160,149,240,192C320,235,400,245,480,218.7C560,192,640,128,720,133.3C800,139,880,213,960,208C1040,203,1120,117,1200,112C1280,107,1360,181,1400,218.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>     <Container>
                {/* </div> */}
            <ul>
                <li><h5 className="text-white "><Image 
                        src={github} 
                        width="auto"
                        height="auto"
                        className="iconSosmed"/>  
                        github.com/AgusYuliantoAYO</h5>
                </li>
                
                <li><h5 className="text-white"><Image 
                        src={ig} 
                        width="auto"
                        height="auto"
                        className="iconSosmed"/> 
                        instagram.com/agusyulianto.ayo</h5> 
                </li>
                <li><h5 className="text-white"><Image 
                        src={linkedn} 
                        width="auto"
                        height="auto"
                        className="iconSosmed"/> 
                        linkedin.com/in/agusyulianto-ayo</h5>
                </li>
            
            </ul>
            </Container>
        </div>
    )
}

export default Sosmed