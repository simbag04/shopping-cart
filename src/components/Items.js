import { Link } from "react-router-dom";
import Item from "./Item";

const Items = (props) => {
    return (
        <div>
            <Link to="/cart">Checkout</Link>
            <div>Items</div>
            {props.items.map((item) => 
                <Item key={item.id} add={props.add} delete={props.delete} edit={props.edit} item={item}/>
            )}
        </div>

    )
}

export default Items