import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to="/"> Popular</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/watchlist"> Watchlist</Link>
        </nav>
    )
}

export default Header
