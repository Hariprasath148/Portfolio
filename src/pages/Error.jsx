import "../css/error.css"
import ErrorVideo from "../assets/videos/Error.gif"
import { NavLink } from 'react-router-dom';

export default function Error() {
  return <>
    <div className="row error_container">
        <div className="col-lg-6 error_inner_containers justify-content-center align-content-center">
            <div>
              <p id="error_txt">ERROR 404</p>
              <p id="error_tag">THIS ISN'T THE PAGE YOU'RE LOOKING FOR</p>
              <p id="error_para">The page you are looking for does not or no longer exists.</p>
              <NavLink className="error_home_button" to="/">HOME</NavLink>
            </div>
        </div>
        <div className="col-lg-6 error_inner_containers justify-content-center align-content-center">
          <img id="error_video" src={ErrorVideo} alt="......" />
        </div>
    </div>
  </>
}
