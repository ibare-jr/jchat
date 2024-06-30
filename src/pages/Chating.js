import {Link} from "react-router-dom";
import Copyright from "../components/Copyright"

export default function Chating() {
  return (
    <div>
      <h1>
        Chating
      </h1>
      <p>
        <Link to="/friends">friends</Link>
      </p>
      <Copyright/>
    </div>
  )
}