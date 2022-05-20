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
            <h4 class="title-ans" >About Us</h4>
            <p class="pa">StartupMuneem is a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors."</p>
            <h4 class="title-ans">FAQ</h4>
            <h6 class="ans">What Makes Us Different</h6>
            <div class="ans"><p>Providing a security to people doing jobs</p>
            </div><p class="pa">On our platform a start-up will not only get experienced investors to pitch for an investment but it will also we getting people doing job as investors.</p>
            
            <p class="ans">Why Job People as Investors?</p>
            <p class="pa"> Our idea to bring job people as investor came after analysing the condition of pandamic that had a catastrophic effect on the whole world and especially on those people whose only source for income was their job. </p> 
                <p class="pa">Keeping that situation in mind we were motivated to designed our platform in such a way that it will result to be fruitful for start-up as well as that person who wants to switch to business without sacrificing his/her job. </p>
                <p class="ans">How it will be useful for Job People and Start-Ups</p>
            <p class="pa">The start-up can pitch job people when it doesn't require a huge amount of investment to carry-on its small operations.
                Similarly, a job person will also be getting a new resource to invest in and maintain a financial security 
            </p>
            <p class="ans">Why Choose Us?</p>
            <p class="pa">Our niche is to establish a friendly relationship between a start-up and an investor by acting as medium of communication. the addition of job people as investors will provide more option to a start-up to choose from. </p>
            
            <h4 class="title-ans">Contact Us</h4>
      <a href="7510076937"
        className="phone contact">
            <FontAwesomeIcon icon={faPhone} size="xl"  />
</a>
      <a href="startupmuneem3@gmail.com"
        className="envelope contact">
            <FontAwesomeIcon icon={faEnvelope} size="xl"  />
</a>

      <h4 class="title-ans">Follow Us</h4>
      
      <a href="https://www.facebook.com/Startup-Muneem-105782222143086"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="xl" />
      </a>
      <a href="https://twitter.com/MuneemStartup" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="xl" />
      </a>
      <a href=""
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </a>
      
      
</div>

        
    );
  };

export default Footer;