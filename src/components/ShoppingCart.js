import { Link } from "react-router-dom"

const ShoppingCart = (props) => {
    return (
        <div>
            <Link to="/items">Go Back</Link>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {props.items.map((item) => item.quantity === 0 ? null : 
                    <tr>
                        <td>{item.brand}</td>
                        <td>{item.color}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                    </tr>)}
            </table>
        </div>
    )
}

export default ShoppingCart