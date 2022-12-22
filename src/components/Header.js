import {Link} from 'react-router-dom'

function Header(props) {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        // border: '3px solid black',
        padding: '8px',
        width: 'auto',
        margin: 'auto',
        }

    return (
        <header>
            <nav style={navStyle} className='nav-bar'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/projects'>PROJECTS</Link>
            </nav>
        </header>
    )
}

export default Header;