function Banner() {
  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="left-div">
            <div className="fb_logo"></div>
            <h2 className="recent-login">Recent Login</h2>
            <p className="text">Click your picture or add an account.</p>\
            <div class="card">
              <div className="photocard"></div>
              <div class="card__content">
                <p class="card__title">Card Title</p>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div className="right-div">
            <form class="form">
              <p class="form-title">Sign in to your account</p>
              <div class="input-container">
                <input type="email" placeholder="Enter email"></input>
                <span></span>
              </div>
              <div class="input-container">
                <input type="password" placeholder="Enter password"></input>
              </div>
              <button type="submit" class="submit">
                Sign in
              </button>

              <p class="signup-link">
                No account?
                <a href="">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function MainPage() {
  return (
    <div className="login_page">
      <Banner />
    </div>
  );
}

export default MainPage;
