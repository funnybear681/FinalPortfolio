
function PortfolioItem(props) {
    const {item, parity} = props;

    return (  
        <div className={parity}>
            <div className="item-container">
                <div className="title">
                    {item}
                </div>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium metus vel velit ultrices, id iaculis dolor fermentum. Praesent nec gravida elit. Integer quis justo egestas neque eleifend convallis sit amet at felis. Nullam dignissim risus justo, at laoreet velit iaculis sit amet. Suspendisse cursus nisl nec interdum pharetra.
                </div>
                
            </div>
    
        </div>
    );  
  }
  
  export default PortfolioItem;