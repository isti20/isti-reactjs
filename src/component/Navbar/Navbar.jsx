import './Navbar.css'

function Navbar() {
    return(
        <div className="n-container">
            <div className="n-left">
                <div className="n-name"></div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>About Me</li>
                    </ul>
                </div>
                <button className="button">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;