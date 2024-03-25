import {Component} from "react"
import NavBar from "../NavBar"
import ExploreMenu from "../ExploreMenu"
import TopDishes from "../TopDishes"
import "./index.css"

const foodItemsList = [
    {
        id:"SANDWICH",
        name:"Bread Sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"21",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_16_aqrp9c.png",

    },
    {
        id:"CAKE",
        name:"Vegan Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_18_d4km8e.png",

    },
    {
        id:"CAKE",
        name:"Cup Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_16_aqrp9c.png",

    },
    {
        id:"CAKE",
        name:"Berry Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381886/Food%20Express/Food%20Items/food_19_dbkilo.png",

    },
    {
        id:"SANDWICH",
        name:"Grilled Sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"15",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381884/Food%20Express/Food%20Items/food_15_wppnhr.png",

    },
    {
        id:"SALAD",
        name:"Greek SALAD",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_1_ycjbnc.png",

    },
    {
        id:"ICECREAM",
        name:"Vaneela Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_12_pxs3hi.png",

    },
    {
        id:"SANDWICH",
        name:"Vagan sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_14_ha2dsh.png",

    },
    {
        id:"ICECREAM",
        name:"Jar Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381881/Food%20Express/Food%20Items/food_11_rbsjjx.png",

    },
    {
        id:"SANDWICH",
        name:"Chicken sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381881/Food%20Express/Food%20Items/food_13_pb02ce.png",

    },
    {
        id:"ICECREAM",
        name:"Fruit Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"22",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381880/Food%20Express/Food%20Items/food_10_vlkffv.png",

    },
    {
        id:"NOODLES",
        name:"Veg Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381329/Food%20Express/Food%20Items/food_32_srfkjj.png",

    },
    {
        id:"NOODLES",
        name:"Arabian Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"25",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381328/Food%20Express/Food%20Items/food_31_x8kwnm.png",

    },
    {
        id:"NOODLES",
        name:"Sause Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"22",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_30_ofadee.png",

    },
    {
        id:"NOODLES",
        name:"white Cream Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_29_mfcwwu.png",

    },
    {
        id:"PASTAS",
        name:"Chilli Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"25",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_29_mfcwwu.png",

    },
    {
        id:"PASTAS",
        name:"Cream Chicken Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381326/Food%20Express/Food%20Items/food_28_qodl12.png",

    },
    {
        id:"PASTAS",
        name:"Cream Ginger Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381326/Food%20Express/Food%20Items/food_27_msgznk.png",

    },
    {
        id:"SALAD",
        name:"Egg Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_24_guawqo.png",

    },
    {
        id:"SALAD",
        name:"Papad Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_25_xultcj.png",

    },
    {
        id:"SALAD",
        name:"Veg Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"15",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_23_w2fxya.png",

    },
    {
        id:"PUREVEG",
        name:"Veg Recepie",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_23_w2fxya.png",

    },
    {
        id:"PUREVEG",
        name:"Veg Cali Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"19",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_22_rup0mj.png",

    },
    {
        id:"PUREVEG",
        name:"Veg Jeff Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_21_un7odl.png",

    },
    {
        id:"PUREVEG",
        name:"Onion Veg Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381319/Food%20Express/Food%20Items/food_3_ormnxz.png",

    },
    {
        id:"ROLLS",
        name:"Egg ROll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_8_kic4bc.png",

    },
    {
        id:"ROLLS",
        name:"Chicken Roll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_6_mm6ubi.png",

    },
    {
        id:"ROLLS",
        name:"Veg Roll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"17",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381320/Food%20Express/Food%20Items/food_7_y29j2i.png",

    },
    {
        id:"DESERT",
        name:"Egg Desert",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381319/Food%20Express/Food%20Items/food_4_fimngv.png",

    },
    {
        id:"DESERT",
        name:"Creamy",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_9_taymny.png",

    },
    {
        id:"DESERT",
        name:"Creamy Crunchy",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_5_hvgwmb.png",

    },
    {
        id:"DESERT",
        name:"Golden Cheese",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_20_qya2ph.png",

    },
    

]

class Home extends Component{
    render(){
        return(
            <div className="main-home">
                <NavBar/>
                <div className="home-banner-div">
                    <img src="https://res.cloudinary.com/dafmi9027/image/upload/v1711283333/Food%20Express/Yellow_Creative_Noodle_Food_Promotion_Banner_nz8frj.jpg" alt="banner" className="home-banner"/>
                </div>
                <ExploreMenu/>
                <hr className="hr-tag"/>
                <h1 className="menu-head">Top Dishes Near You</h1>
                <ul className="topDishes-List">
                {foodItemsList.map(eachFood => <TopDishes key={eachFood.id} data={eachFood}/>)}
                </ul>
            </div>
        )
    }
}
export default Home