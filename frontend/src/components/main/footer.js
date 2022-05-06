import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import { faPhone} from '@fortawesome/free-solid-svg-icons'
  import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
  
const Footer = () => {
  
    return (


        <div class="social-container">
            <h2>About Us</h2>
            <p>StartupMuneem is a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors."</p>
            <h2>FAQ</h2>
            <h4>What Makes Us Different</h4>
            <h6>Providing a security to people doing jobs</h6>
            <p>On our platform a start-up will not only get experienced investors to pitch for an investment but it will also we getting people doing job as investors.</p>
               
            <h4>Why Job People as Investors?</h4>
            <p> Our idea to bring job people as investor came after analysing the condition of pandamic that had a catastrophic effect on the whole world and especially on those people whose only source for income was their job </p> 
                <p>Keeping that situation in mind we were motivated to designed our platform in such a way that it will result to be fruitful for start-up as well as that person who wants to switch to business without sacrificing his/her job </p>
                <h4>How it will be useful for Job People and Start-Ups</h4>
            <p>The start-up can pitch job people when it doesn't require a huge amount of investment to carry-on its small operations.
                Similarly, a job person will also be getting a new resource to invest in and maintain a financial security 
            </p>
            <h2>Why Choose Us?</h2>
            <p>Our niche is to establish a friendly relationship between a start-up and an investor by acting as medium of communication. the addition of job people as investors will provide more option to a start-up to choose from. </p>
            
            <h2>Contact Us</h2>
      <a href="7510076937"
        className="phone contact">
            <FontAwesomeIcon icon={faPhone} size="2x"  />
</a>
      <a href="devmarwaha.14@gmail.com"
        className="envelope contact">
            <FontAwesomeIcon icon={faEnvelope} size="2x"  />
</a>

      <h2>Follow Us</h2>
      
      <a href=""
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href=""
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      
      
</div>

        
    );
  };

export default Footer;