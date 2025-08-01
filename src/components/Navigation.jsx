import '../styles/Navigation.css'

const Navigation = () => {

  return (
    <div id="container-header">
      <div className="brand-logo">
        <img src="/public/images/Weblogo_Wonderful_Travel.png" alt="wt-logo"/>
      </div>
      <ul>
        <li>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">GALLERY</a>
          <a href="#">COMMUNITY</a>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
      <div className="bttn-signin">
        <a href="#">Login</a>
      </div>
      <div className="hamburger-menu"></div>
    </div>
  )
}

export default Navigation
