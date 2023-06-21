import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <h1>Yarn Shop</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/cart">Shopping Cart</Link></li>
                </ul>
                
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Navbar