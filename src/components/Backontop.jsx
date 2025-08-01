import '../styles/Backontop.css'

const BackOnTop = () => {

  return (
    <div className="container-ontop">
      <a href="#">Back to <FontAwesomeIcon icon="fa-solid fa-arrow-up" /></a>
    </div>
  )
}

export default BackOnTop


// FONT AWESOME AREA //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
// FONT AWESOME AREA //