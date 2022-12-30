import './Card1.css';
import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card1 from './Card1'
import FS from './FS';
import Footer from './Footer';
function App() {
  let settings={
    dots:true,
    infinite:true,
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
};
  return (
    <div>
      <FS/>
    <div>
      <div>
    <Carousel {...settings}>
      <Wrap>
        <img src='https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t3.ftcdn.net/jpg/05/26/29/16/240_F_526291640_YlUdaATt7BfPwBMqnQ1MWK9PHmWA2ZF1.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://t4.ftcdn.net/jpg/03/99/50/79/240_F_399507907_ihIVdrantaY6B6lJ6j0xV5c85eel9Rli.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='https://www.bgs.ac.uk/wp-content/uploads/2021/06/P680442.jpg' alt=''/>
      </Wrap>
    </Carousel>
    </div>
    <hr/>
    <div className="container mx-auto">
      <Card1
      title="Consequnces"
      body="Natural events such as volcanic eruptions and meteor impacts can cause earthquakes, but the majority of naturally-occurring earthquakes are triggered by movement of the earth's plates.
      The earth's surface consists of 20 constantly moving plates. The pressure increase from shifting plates can cause the crust to break. This break allows stress to be released as energy, which moves through the earth in the form of waves (aka earthquakes).
      Normally, it's not the shaking ground itself that claims lives during an earthquake. It's the associated destruction of man-made structures and the instigation of other natural disasters such as tsunamis, avalanches and landslides. Not only is it important to have a plan for yourself in the case of an earthquake, but your pets need a disaster plan as well. Create an earthquake plan for the animals around so if disaster strikes, you’ll be prepared. Sign up for Save Our Pets.[3]
      The National Earthquake Information Center (NEIC) records an average of 20,000 earthquakes every year (about 50 a day) around the world. There are, however, millions of earthquakes estimated to occur every year that are too weak to be recorded."/>
    </div>
    <div className="container mx-auto">
      <Card1
      title="Precautions"
      body="When an earthquake starts, grab your emergency preparedness kit. Remember, Drop, Cover, and Hold On.
      Get down on the ground under a table or desk. Keep your emergency preparedness kit nearby so you'll have the supplies you need.
      Keep clear of windows—glass may shatter from the shaking.
      Never stand under objects that can fall on top of you like a large bookcase.
      If you’re in bed, cover your head and neck with pillows.
      If you are home, don’t go outside. Stay off the roads.
      If you’re outside, move away from buildings which can collapse. Stay in an open area where there are no trees, buildings or power lines.
      If you’re driving when an earthquake strikes, pull over to a large open area that’s not under trees or power lines. Set the parking brake. Stay in the vehicle.
      If you’re at school, work, or any shopping area don’t take the elevator. Take the stairs."/>
    </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
const Carousel=styled(Slider)`
li.slick_active button:before{
  color:white;
}
ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,150,171);
  }
}
.slick-list{
  overflow:visible;
}
`
const Wrap=styled.div`
cursor:pointer;
img{
    border-radius:4px;
    width:2000px;
    height:400px;
    transition-duration:300ms;
    &:hover{
      border:4px solid rgba(249,249,249,0.8);
    }
}
`
export default App;