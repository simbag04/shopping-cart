import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="body">
            <div className="title">Welcome to the Yarn Shop!</div>
            <Link to="/items">Shop Now</Link>
        </div>
    )
}

export default Home