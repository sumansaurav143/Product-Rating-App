import '../App.css'

import Watch from "../watch.jpeg";
import Earbud from "../earbud.jpeg";
import Light from "../light.jpeg";
import Chair from "../chair.jpeg";
import Shoe from "../shoe.jpeg";


function Leftdiv(){
  
    const data = [
        {
          Rname: "Dizo Smart Watch",
          Des: "Smart Watch for Men",
          img: Watch
        },
        {
          Rname: "Oppo Echo Air 2",
          Des: "Good quality earbuds",
          img: Earbud
        },
        {
          Rname: "Rice Light",
          Des: "Lights for Decoration ",
          img: Light
        },
        {
          Rname: "Office Chair",
          Des: "Best Chair for Office.",
          img: Chair
        },
        {
          Rname: "Sport Shoe",
          Des: "Comfortable Shoess.",
          img: Shoe
        }
      ];
    return(
        <div className="left-div">
      {data.map((ele, index) => { 
        const { Rname , Des , img } = ele;
      return <>
      <div key={index} className="img-detail">
            <img className="img" src={img} alt="" />
            <div>
              <label>
                <b>{Rname}</b>
              </label>
              <h5>{Des}</h5>
            </div>
          </div>
          </>
})}
    </div>
    )
}

export default Leftdiv;