import "./index.css"
import ExploreItem from "../ExploreItem"

const menuList = [
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295528/Food%20Express/Explore%20Menu/menu_8_ncgtl5.png",
        menuId:"Noodles",
        menuKey:"NOODLES"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295527/Food%20Express/Explore%20Menu/menu_7_drtozh.png",
        menuId:"Pasta",
        menuKey:"PASTAS"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295423/Food%20Express/Explore%20Menu/menu_6_whceps.png",
        menuId:"Pure Veg",
        menuKey:"PUREVEG"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_5_oqgjml.png",
        menuId:"Cake",
        menuKey:"CAKE"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_3_rcibte.png",
        menuId:"Deserts",
        menuKey:"DESERT"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_4_ppd0ep.png",
        menuId:"Sandwich",
        menuKey:"SANDWICH"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_2_zl3jvi.png",
        menuId:"Rolls",
        menuKey:"ROLLS"
    },
    {
        menuUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711295370/Food%20Express/Explore%20Menu/menu_1_tb5odq.png",
        menuId:"Salad",
        menuKey:"SALAD"
    },
    

    
]


const ExploreMenu = (props) => {
    const {fetchingbyClickingMenu} = props
    const gettingKeyOFMenu = (menuKey) => {
        fetchingbyClickingMenu(menuKey)
    }
    return(
        <div className="menu-section">
            <h1 className="menu-head">Explore Menu</h1>
            <p className="menu-para">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu">
            {menuList.map(eachMenu => <ExploreItem key={eachMenu.menuId} menuData={eachMenu} gettingKeyOFMenu={gettingKeyOFMenu}/>)}
        </div>
        </div>
    )
}

export default ExploreMenu