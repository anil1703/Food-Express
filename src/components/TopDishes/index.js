import "./index.css"

const TopDishes = (props) => {
    const {data,addingToCart} = props
    const {id,name,description,imageUrl,price,gd} = data
    const priceDetails = "$ "+price
    const clickingToCart = (gd) => {
        addingToCart(gd)
    }
    return (
        
        <li className="topDishItem">
            <img src={imageUrl} alt={id} className="dish-food-img"/>
            <button className="addToCart" onClick={() => clickingToCart(gd)}>Add to Cart</button>
            <div className="inside-list">
            <h1 className="topDish-name">{name}</h1>
            <img src="https://res.cloudinary.com/dafmi9027/image/upload/v1711384002/Food%20Express/rating_starts_yic27h.png" alt="starts" className="rating-icon"/>
            
            </div>
            
            <p className="topDish-para">{description}</p>
            <h1 className="price-head">{priceDetails}</h1>
            
        </li>
    )
}
export default TopDishes