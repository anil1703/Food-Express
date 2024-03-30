import LocalContext from "../../context/LocalContext"
import "./index.css"

const TopDishes = (props) => {
    const {data} = props
    const {id,name,description,imageUrl,price,gd} = data
    const priceDetails = "$ "+price

    return <LocalContext.Consumer>
        {value => {
            const {managingCartElements} = value 
            const clickingToCart = (data) => {
                managingCartElements(data)
            }
            return (
                <li className="topDishItem">
                    <img src={imageUrl} alt={id} className="dish-food-img"/>
                    <button className="addToCart" onClick={clickingToCart}>Add to Cart</button>
                    <div className="inside-list">
                    <h1 className="topDish-name">{name}</h1>
                    <img src="https://res.cloudinary.com/dafmi9027/image/upload/v1711384002/Food%20Express/rating_starts_yic27h.png" alt="starts" className="rating-icon"/>
                    
                    </div>
                    
                    <p className="topDish-para">{description}</p>
                    <h1 className="price-head">{priceDetails}</h1>
                    
                </li>
            )
        }}
    </LocalContext.Consumer>
}

export default TopDishes