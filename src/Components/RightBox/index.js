import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const RightBox = () => {
    return(
        <div className="form-container sign-in-container">
                <form action="#mar">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#mar" className="forgot">Forgot your password?</a>
                    <button>Sign In</button>
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