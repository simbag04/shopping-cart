import { Link } from "react-router-dom"
import Totals from "./Totals"

const ShoppingCart = (props) => {
    return (
        <div className="shopping-cart body">
            <div className="title">Shopping Cart</div>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => item.quantity === 0 ? null : 
                        <tr key={item.id}>
                            <td>{item.brand}</td>
                            <td>{item.color}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>                    
                            <td>${item.quantity * item.price}</td>
                        </tr>)}
                </tbody>
            </table>
            <Totals totalItems={props.totalItems} totalPrice={props.totalPrice} />
            <Link to="/items">Go Back</Link>
        </div>
    )
}

export default ShoppingCart