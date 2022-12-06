import jerseystore from '../images/JerseyStore.png'
function JerseyStore(props) {
    const {parity} = props;

    return (  
        <div className={parity}>
            <div className="text-and-image">
                <div className="item-container">
                    <div className="title">
                        Jersey Store
                    </div>
                    <div className="description">
                        This is an interactive jersey store where individuals can buy jerseys for their favorite MLB players. Functionality I added includes sorting by price, as well as filtering by team or whether the player is active or retired. This option allows for people to find their desired player with much more ease than other sites, which do not have this option, especially the active vs. retired filtering.
                    </div>
                    <a href="https://funnybear681.github.io/cs1300development/">Link to the website</a>
                </div>
            </div>
            <img className="info-image" src={jerseystore} alt="placeholder"></img>
        </div>
    );  
  }
  
  export default JerseyStore;