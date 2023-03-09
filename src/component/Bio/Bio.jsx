import './Bio.css';

function Bio() {
    return(
        <div className="bio">
            <div className="b-left">
                <div className="b-name">
                    <span>Hi! I am</span>
                    <span>Iis Istiqomah</span>
                    <span>Frontend Developer with experience
                        in web designing and development
                    </span>
                </div>
                <button className="b-button">Hire me</button>
            </div>
            <div className="b-right"></div>
        </div>
    );
}

export default Bio;