import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>Yarn Shop</h1>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Navbar