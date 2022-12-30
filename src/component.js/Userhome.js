import React from 'react'
import Card from "./Card"
function Userhome() {
  return (
    <div>
    <div className="container">
        <div className="row my-5">
            <Card image={"https://img.freepik.com/free-vector/city-destroy-war-zone-abandoned-buildings-bridge-with-smoke-cataclysm-destruction-natural-disaster-post-apocalyptic-world-ruins-with-broken-road-street-cartoon-illustration_107791-3826.jpg?size=626&ext=jpg&ga=GA1.2.708867965.1657127663"}
            head={"Earth Quake"}
            para={"To know more about earthquakes click here"}/>
            <Card image={"https://t4.ftcdn.net/jpg/03/99/50/79/240_F_399507907_ihIVdrantaY6B6lJ6j0xV5c85eel9Rli.jpg"}
               head={"Sand Storm"}
               para={"To know more about earthquakes click here"}/> 
                <Card image={"https://t4.ftcdn.net/jpg/03/99/50/79/240_F_399507907_ihIVdrantaY6B6lJ6j0xV5c85eel9Rli.jpg"}
               head={"Sand Storm"}
               para={"To know more about earthquakes click here"}/> 
        </div>
    </div>
    <div className="container">
        <div className="row my-5">
          <Card image={"https://t4.ftcdn.net/jpg/01/45/02/67/240_F_145026793_SqNcilXyQ1L7S0Fzsab2IKviVAIRhQ40.jpg"}
          head={"Sink Holes"}
          para={"To know more about earthquakes click here"}/>
           <Card image={"https://t3.ftcdn.net/jpg/02/95/32/60/240_F_295326025_iGaR2nAK825YByWDhKeWHj2RCEr4TAD1.jpg"}
           head={"FLoods"}
               para={"To know more about earthquakes click here"}/> 
          <Card image={"https://t3.ftcdn.net/jpg/01/80/65/68/240_F_180656803_23bAMoCV2q4onVIh4V1RYVyyDOuP6oqz.jpg"}
          head={"Tsunami"}
          para={"To know more about earthquakes click here"}/>
          </div>
     </div>
     </div>
  )
}

export default Userhome