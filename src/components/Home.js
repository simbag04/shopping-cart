import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            Welcome to the Yarn Shop!
            <Link to="/items">Shop Now</Link>
        </div>
    )
}

export default Home