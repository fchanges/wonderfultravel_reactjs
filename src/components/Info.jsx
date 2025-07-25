import '../styles/Info.css'

function Info() {

  return (
    <div className="container-info">
      <div className="info-flex">
        <div className="info-items">
          <FontAwesomeIcon icon="fa-solid fa-calendar" />
          <div className="judul-items">Schedule/day</div>
          <p>We are available</p>
        </div>
        <div className="info-items">
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <div className="judul-items">Members</div>
          <p>Professional served</p>
        </div>
        <div className="info-items">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
          <div className="judul-items">Chat Us</div>
          <p>Fast Respons</p>
        </div>
        <div className="info-items">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <div className="judul-items">Search</div>
          <p>Find destinations</p>
        </div>
      </div>
    </div>
  );
}

export default Info


// FONT AWESOME AREA //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
// FONT AWESOME AREA //
