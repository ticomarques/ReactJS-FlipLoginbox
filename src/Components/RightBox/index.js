export const RightBox = () => {
    return(
        <div class="form-container sign-in-container">
                <form action="#mar">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#mar" class="forgot">Forgot your password?</a>
                    <button>Sign In</button>
                    <br />
                    <br />
                    <br />
                    <span>or use your social media</span>
                    <div class="social-container">
                        <a href="#mar" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#mar" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#mar" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    
                </form>
            </div>
    );
};