import "./index.css"

const ExploreItem = (props) => {
    const {menuData,gettingKeyOFMenu} = props
    const {menuUrl,menuId,menuKey} = menuData
    const clickingMenu  = () => {
        gettingKeyOFMenu(menuKey)
    }
    return(
        <button onClick={clickingMenu} className="butns-Exlore_menu">
<div className="menuItem">
            <img src={menuUrl} className="image-menu" alt={menuId}/>
            <p>{menuId}</p>
        </div>

        </button>
        
    )
}
export default ExploreItem