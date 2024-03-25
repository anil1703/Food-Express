import "./index.css"

const ExploreItem = (props) => {
    const {menuData} = props
    const {menuUrl,menuId} = menuData
    return(
        <div className="menuItem">
            <img src={menuUrl} className="image-menu" alt={menuId}/>
            <p>{menuId}</p>
        </div>
    )
}
export default ExploreItem