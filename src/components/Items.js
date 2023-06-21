import { Link } from "react-router-dom";
import Item from "./Item";

const Items = (props) => {
    return (
        <div className="items body">
            <div className="title">Items</div>
            <div className="products">
                {props.items.map((item) => 
                    <Item key={item.id} add={props.add} delete={props.delete} edit={props.edit} item={item}/>
                    )}
            </div>
            
            <Link to="/cart">Checkout</Link>
        </div>
    )
}

export default Items