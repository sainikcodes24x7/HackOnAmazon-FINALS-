import React, { useState, useEffect } from 'react'
import './cat.css'
import { db } from '../../firebase'
import Card from '../card/Card'
const HomeDecor = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    var data1 = [];
    useEffect(() => {
        db.collection("home").get().then(function (querySnapshot) {
            querySnapshot.forEach((doc) => {


                data1.push(doc.data())

            })
            setData(data1);
            setLoading(false);
        }
        )


    }, [])
    if (data) {
        console.log("DATA", data);
    }
    if (loading) {
        console.log("here")
        return <div><h1 className="loader">LOADING</h1></div>
    }
    //  const data = [{ itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }, { itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }, { itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }]

    return (
        <div>

            <h1 className="title">Home Decor</h1>
            <p className="p2">Click on the image to reveal QR code.</p>
            <Card data={data} />

        </div>
    )
}

export default HomeDecor
