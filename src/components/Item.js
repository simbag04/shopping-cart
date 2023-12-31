const Item = (props) => {
    const handleChange = (e) => {
        props.edit(e.target.id, e.target.value - props.item.quantity);
        e.target.value = null;
    }
    return (
        <div key={props.item.id} className="product">
            <div className="product-title">{props.item.brand} {props.item.color}</div> 
            <img src={props.item.src} alt="lavender"/>
            <span>
                <button id={props.item.id} onClick={(e) => props.delete(e.target.id)}>-</button>
                <input type="number" min="0" id={props.item.id} value={props.item.quantity} 
                    onChange={handleChange}/>
                <button id={props.item.id} onClick={(e) => props.add(e.target.id)}>+</button>
            </span>
        </div>
    )
}

export default Item
    