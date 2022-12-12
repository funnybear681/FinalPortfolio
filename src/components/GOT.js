import got from '../images/CS1410.png'
import {useState} from 'react';

function GOT(props) {
    const {parity} = props;
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (  
        <div className={parity}>
            <div className="text-and-image">
                <div className="item-container">
                    <div className="title">
                        CSCI 1410 Course Website
                    </div>
                    <div className="description">
                        I helped create the course website for CSCI 1410: Artifiical Intelligence. The course staff voted on a Game of Thrones theme, so the site is quite full with Game of Thrones themed imagery and fonts. At the same time, all relevant information, including lectures, assignments, hours and resources are presented in an intuitive way. This was accomplished by using headers with Game of Thrones-esque fonts, as well as images from the show.
                    </div>
                    <div>
                        <a href="https://csci1410-2022.vercel.app/">Course Website</a>
                    </div>
                </div>
            </div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img className="info-image" src={got}></img>
                {isHovering && <h2>Hello World</h2>}
            </div>
        </div>
    );  
  }
  
  export default GOT;