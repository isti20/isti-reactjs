import './Bio.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

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
                <div className="b-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="b-right"></div>
        </div>
    );
}

export default Bio;