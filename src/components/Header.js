import placeholder from '../images/placeholder.png'
import berkshire from '../images/BerkshireHathaway.png'
import got from '../images/CS1410.png'
import jerseys from '../images/JerseyStore.png'
import bakery from '../images/Bakery.png'

function Header(){
    return(
        <div className="frontpage">
            <div className="header">
                Hi - I'm a CS1300 Student focused on making User Interfaces as simple and intuitive as possible. Here is some of my work.
            </div>
            <div className="portfolio-gallery">
                <div className="gallery-header">
                    Click an item for more info
                </div>
                <div className="image-gallery">
                    <div>
                        <img className="gallery" src={berkshire}></img>
                        <div>Berkshire Hathaway Redesign</div>
                    </div>
                    <div>
                        <img className="gallery" src={got}></img>
                        <div>CSCI 1410 Course Website</div>
                    </div>
                </div>
                <div className="image-gallery">
                    <div>
                        <img className="gallery" src={jerseys}></img>
                        <div>Jersey Store</div>
                    </div>
                    <div>
                        <img className="gallery" src={bakery}></img>
                        <div>Bakery</div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Header;