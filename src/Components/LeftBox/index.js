import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const LeftBox = () => {
    return(
        <div className="form-container sign-up-container">
            <form action="#mar">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                <br />
                <br />
                <br />
                <br />
                <span>or use your social media</span>
                <div className="social-container">
                    <a href="#mar" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#mar" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#mar" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </form>
        </div>
    );
};