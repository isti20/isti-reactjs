import './Bio.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Woman from '../../img/woman.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';

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
            <div className="b-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Woman} alt="" />
            </div>
        </div>
    );
}

export default Bio;