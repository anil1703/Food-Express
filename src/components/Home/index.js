import {Component, Fragment} from "react"
import NavBar from "../NavBar"
import ExploreMenu from "../ExploreMenu"
import TopDishes from "../TopDishes"
import { v4 as uuidv4 } from 'uuid';
import {ColorRing} from "react-loader-spinner"
import "./index.css"

const foodItemsList = [
    {
        id:"SANDWICH",
        
        name:"Bread Sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"21",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_16_aqrp9c.png",
        gd:uuidv4()

    },
    {
        id:"CAKE",
        name:"Vegan Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_18_d4km8e.png",
        gd:uuidv4()

    },
    {
        id:"CAKE",
        name:"Cup Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381887/Food%20Express/Food%20Items/food_17_n0njqt.png",
        gd:uuidv4()

    },
    {
        id:"CAKE",
        name:"Berry Cake",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381886/Food%20Express/Food%20Items/food_19_dbkilo.png",gd:uuidv4()

    },
    {
        id:"SANDWICH",
        name:"Grilled Sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"15",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381884/Food%20Express/Food%20Items/food_15_wppnhr.png",gd:uuidv4()

    },
    {
        id:"SALAD",
        name:"Greek SALAD",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_1_ycjbnc.png",gd:uuidv4()

    },
    {
        id:"ICECREAM",
        name:"Vaneela Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_12_pxs3hi.png",gd:uuidv4()

    },
    {
        id:"SANDWICH",
        name:"Vagan sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381882/Food%20Express/Food%20Items/food_14_ha2dsh.png",gd:uuidv4()

    },
    {
        id:"ICECREAM",
        name:"Jar Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381881/Food%20Express/Food%20Items/food_11_rbsjjx.png",gd:uuidv4()

    },
    {
        id:"SANDWICH",
        name:"Chicken sandwich",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"12",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381881/Food%20Express/Food%20Items/food_13_pb02ce.png",gd:uuidv4()

    },
    {
        id:"ICECREAM",
        name:"Fruit Ice Cream",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"22",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381880/Food%20Express/Food%20Items/food_10_vlkffv.png",gd:uuidv4()

    },
    {
        id:"NOODLES",
        name:"Veg Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381329/Food%20Express/Food%20Items/food_32_srfkjj.png",gd:uuidv4()

    },
    {
        id:"NOODLES",
        name:"Arabian Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"25",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381328/Food%20Express/Food%20Items/food_31_x8kwnm.png",gd:uuidv4()

    },
    {
        id:"NOODLES",
        name:"Sause Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"22",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_30_ofadee.png",gd:uuidv4()

    },
    {
        id:"NOODLES",
        name:"white Cream Noodles",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_29_mfcwwu.png",gd:uuidv4()

    },
    {
        id:"PASTAS",
        name:"Chilli Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"25",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381327/Food%20Express/Food%20Items/food_29_mfcwwu.png",gd:uuidv4()

    },
    {
        id:"PASTAS",
        name:"Cream Chicken Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381326/Food%20Express/Food%20Items/food_28_qodl12.png",gd:uuidv4()

    },
    {
        id:"PASTAS",
        name:"Cream Ginger Pastas",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381326/Food%20Express/Food%20Items/food_27_msgznk.png",gd:uuidv4()

    },
    {
        id:"SALAD",
        name:"Egg Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_24_guawqo.png",gd:uuidv4()

    },
    {
        id:"SALAD",
        name:"Papad Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_25_xultcj.png",gd:uuidv4()

    },
    {
        id:"SALAD",
        name:"Veg Salad",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"15",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_23_w2fxya.png",gd:uuidv4()

    },
    {
        id:"PUREVEG",
        name:"Veg Recepie",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381324/Food%20Express/Food%20Items/food_23_w2fxya.png",gd:uuidv4()

    },
    {
        id:"PUREVEG",
        name:"Veg Cali Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"19",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_22_rup0mj.png",gd:uuidv4()

    },
    {
        id:"PUREVEG",
        name:"Veg Jeff Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_21_un7odl.png",gd:uuidv4()

    },
    {
        id:"PUREVEG",
        name:"Onion Veg Mix",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381319/Food%20Express/Food%20Items/food_3_ormnxz.png",gd:uuidv4()

    },
    {
        id:"ROLLS",
        name:"Egg ROll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"10",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381323/Food%20Express/Food%20Items/food_8_kic4bc.png",gd:uuidv4()

    },
    {
        id:"ROLLS",
        name:"Chicken Roll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_6_mm6ubi.png",gd:uuidv4()

    },
    {
        id:"ROLLS",
        name:"Veg Roll",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"17",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381320/Food%20Express/Food%20Items/food_7_y29j2i.png",gd:uuidv4()

    },
    {
        id:"DESERT",
        name:"Egg Desert",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381319/Food%20Express/Food%20Items/food_4_fimngv.png",gd:uuidv4()

    },
    {
        id:"DESERT",
        name:"Creamy",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"20",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_9_taymny.png",gd:uuidv4()

    },
    {
        id:"DESERT",
        name:"Creamy Crunchy",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"23",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_5_hvgwmb.png",gd:uuidv4()

    },
    {
        id:"DESERT",
        name:"Golden Cheese",
        description:"Food Provides essential nutrients for overall health and well-being",
        price:"18",
        imageUrl:"https://res.cloudinary.com/dafmi9027/image/upload/v1711381321/Food%20Express/Food%20Items/food_20_qya2ph.png",gd:uuidv4()

    },
    

]

class Home extends Component{
    state={Dishes:foodItemsList,isLoading:true,cartList:[]}
    fetchingbyClickingMenu = (menuKey) => {
        console.log(menuKey);
        const updatedDishes = foodItemsList.filter(
          (eachDish) => eachDish.id === menuKey
        );
      
        this.setState({
          Dishes: updatedDishes,
          isLoading:false
        });
      }
      componentDidMount(){
        this.setState({
            isLoading:false
        })
      }
      addingToCart = (gd) => {
        const findItemInList = foodItemsList.find(eachItem => eachItem.gd === gd);
        this.setState(prevState => ({
            cartList: [...prevState.cartList, findItemInList]
        }));
    }
    
    
    render(){
        const {Dishes,isLoading,cartList} = this.state
        return(
            <div className="main-home">
                <NavBar/>
                <div className="home-banner-div">
                    <img src="https://res.cloudinary.com/dafmi9027/image/upload/v1711283333/Food%20Express/Yellow_Creative_Noodle_Food_Promotion_Banner_nz8frj.jpg" alt="banner" className="home-banner"/>
                </div>
                <ExploreMenu fetchingbyClickingMenu={this.fetchingbyClickingMenu}/>
                <hr className="hr-tag"/>
                <h1 className="menu-head">Top Dishes Near You</h1>
                {isLoading?(<Fragment className="spin"><ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
  </Fragment>):(<><ul className="topDishes-List">
                    {Dishes.map((eachFood) => (
                        <TopDishes key={eachFood.gd} data={eachFood} addingToCart={this.addingToCart}/>
                    ))}
                    
                </ul>
                <hr className="hr-tag"/></>)}
                

            </div>
        )
    }
}
export default Home