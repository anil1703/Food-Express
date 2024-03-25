import "./index.css"
import ExploreItem from "../ExploreItem"
const menuList = [
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295528/Food%20Express/Explore%20Menu/menu_8_ncgtl5.png",
        menuId:"Noodles"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295527/Food%20Express/Explore%20Menu/menu_7_drtozh.png",
        menuId:"Pasta"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295423/Food%20Express/Explore%20Menu/menu_6_whceps.png",
        menuId:"Pure Veg"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_5_oqgjml.png",
        menuId:"Cake"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_3_rcibte.png",
        menuId:"Deserts"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_4_ppd0ep.png",
        menuId:"Sandwich"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_2_zl3jvi.png",
        menuId:"Rolls"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_1_tb5odq.png",
        menuId:"Salad"
    },
    
    
]


const ExploreMenu = () => {
    return(
        <div className="menu-section">
            <h1 className="menu-head">Explore Menu</h1>
            <p className="menu-para">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu">
            {menuList.map(eachMenu => <ExploreItem key={eachMenu.menuId} menuData={eachMenu}/>)}
        </div>
        </div>
    )
}

export default ExploreMenu