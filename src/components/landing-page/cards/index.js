import './style.css'

function Cards(props) {
    const { title, desc, img } = props;
    console.log(props)
    return (
        <div className="center" id='section-3'>
            <div className="card">
                <h2>{title}</h2>
                <img src={img} alt="img" />
                <p className="title">{desc}</p>
            </div>
        </div>
    )
}
export default Cards;