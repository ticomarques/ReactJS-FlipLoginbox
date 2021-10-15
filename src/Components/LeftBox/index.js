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
                    <a href="#mar" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#mar" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#mar" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </form>
        </div>
    );
};