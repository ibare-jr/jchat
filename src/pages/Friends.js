import {Link} from "react-router-dom";
import Copyright from "../components/Copyright"

export default function Friends() {
  return (
    <div>
      <h1>
        Friends
      </h1>
      <p>
        <Link to="/">Home</Link>
        <Link to="/chating">Chating</Link>
      </p>
      <Copyright/>
    </div>
  )
}