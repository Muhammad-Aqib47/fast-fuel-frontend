import Cards from "../cards";
import './style.css'


function ServicesCard() {

    let cardDatas = [{
        img : "./images/fleet.jpg",
        title: "Fleet Refueling",
        desc: "Fleet fueling is where instead of sending your drivers to go fill up with fuel, the fuel comes to you."
    },
    {
        img : "./images/generator.jpg",
        title: "Generator Refueling",
        desc: "Generator fueling is where fueling tank will arrive fill up with fuel, the fuel comes to you."
    },
    {
        img : "./images/industrial.jpg",
        title: "Industrial Refueling",
        desc: "Industrial refueling will be our upcomming project and it will be launched soon."
    }];

    return (
        <>
        <div style = {{display : "flex", backgroundColor: "aliceblue"}}>
            <h4 className="services">Our Services</h4>
            {cardDatas.map((cardData) => {
                return <Cards title = {cardData.title}  desc = {cardData.desc} img = {cardData.img} />
            })}
        </div>
        </>
    );
}
export default ServicesCard;