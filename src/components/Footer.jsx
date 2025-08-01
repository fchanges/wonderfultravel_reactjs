import "../styles/Footer.css"

function Footer() {

  return (
    <div className="container-footer">
      <div class="footer-flex">
        <div class="footer-items-logo">
          <img src="images/logo_Wonderful_Travel.png" alt="" />
        </div>
        <div class="footer-items-text">
          <p>Copyright &copy; 2025. All Right Reserved.</p>
          <p>Jl. Agung Permata</p>
          <p>Komp-Apple, Kota Kayangan</p>
          <p>Republik Semesta</p>
          <br />
            <div className="fa-icon"/>
              <span><FontAwesomeIcon icon="fa-brands fa-facebook"/></span>
              <span><FontAwesomeIcon icon="fa-brands fa-whatsapp"/></span> 
              <span><FontAwesomeIcon icon="fa-brands fa-instagram"/></span>
              <span><FontAwesomeIcon icon="fa-brands fa-linkedin"/></span>
              <span><FontAwesomeIcon icon="fa-brands fa-youtube"/></span>
            <div/>
        </div>
      </div>
    </div>
  )
}

export default Footer



// FONT AWESOME AREA //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
// FONT AWESOME AREA //
