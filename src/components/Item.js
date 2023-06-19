const Item = (props) => {
    return (
        <div key={props.item.id}>
            <div>{props.item.brand} {props.item.color}</div> 
            <span>
                <button id={props.item.id} onClick={(e) => props.delete(e.target.id)}>-</button>
                <input type="number" min="0" id={props.item.id} value={props.item.quantity} 
                    onChange={(e) => props.edit(e.target.id, e.target.value - props.item.quantity)}>
                    
                </input>
                <button id={props.item.id} onClick={(e) => props.add(e.target.id)}>+</button>
            </span>
        </div>
    )
}

export default Item
    