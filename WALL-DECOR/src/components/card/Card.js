import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Card.css'
const Card = (props) => {
    const [showQR, setShowQR] = useState(false);
    const flipCard = (id) => {
        id ? id = 0 : id = 1;

        return id
    }


    return <>
        <div className="row allcards">
            {props && props.data.length != 0 && props.data.map((ele, i) => {
                console.log(ele.id);
                return (

                    <div className="cardContainer">
                        <div className="itemcards front">
                            <div className="scene">
                                <div className="card" id={ele.id} onClick={() => { ele.id = flipCard(ele.id); setShowQR(!showQR); }} >
                                    {ele.id == 0 ? (<img src={ele.url} style={{
                                        height: "25rem",
                                        width: "100%",
                                        borderTopRightRadius: "2rem",
                                        borderTopLeftRadius: "2rem",
   
                                        
                                    }}></img>) : (<img src={ele.image} style={{
                                        height: "25rem",
                                        width: "100%",
                                        backgroundRepeat:"no-repeat",
                                        borderTopRightRadius: "2rem",
                                        borderTopLeftRadius: "2rem",
                                    }}></img>)}
                                    {/* <div style={{
                                        backgroundImage: `url(${ele.image})`,
                                        backgroundSize: "cover",
                                        height: "auto",
                                        backgroundPosition: 'center',

                                    }}></div> */}

                                </div>
                            </div>
                            <div className="details">
                                <h2 className="itemName">{ele.title}</h2>
                                <Row className="r1">
                                    <h2 className="c3">From:</h2>
                                    <h2 className="c4">{ele.shop}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Owner:</h2>
                                    <h2 className="c4">{ele.seller}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Contact:</h2>
                                    <h2 className="c4">{ele.contact}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Dimensions</h2>
                                    <h2 className="c4">{ele.dimension}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3 i1">Rs {ele.price}</h2>
                                    <Button className="mybtn btn-success">Purchase</Button>
                                </Row>
                            </div>

                        </div>

                    </div>

                )
            })}
        </div>


    </>
}

export default Card
