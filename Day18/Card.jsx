import React from "react"

function Card(props){
//     console.log(props);
    return (
          <React.Fragment>
       
          <div className="cards">
                <div className="card">
                      <img src={props.imgsrc} height="250px" width="300px" className="card_image" />
                      <div className="class_info">
                            <span className="card_catagory">{props.title} </span>
                            <h3 className="card_title"> {props.sname} </h3>
                            <a href={props.link} target="_blank">
                                  <button>Watch Now</button>
                            </a>
                      </div>

                </div>

          </div>

         
    </React.Fragment>

    );
}

export default Card;