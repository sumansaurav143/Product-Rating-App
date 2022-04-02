import '../App.css';

function Header(){
    return(
        <div className="Header">
        <h2 className="H-text">
          Flipkart <span className="T-color">Product</span>
        </h2>
        <hr id="T-hr" />
        <h2 className="P-text">
          Product <span className="T-color">Rating</span>
        </h2>
      </div>
    );
}

export default Header;