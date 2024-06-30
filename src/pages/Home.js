import {Link} from "react-router-dom"
import Copyright from "../components/Copyright"

export default function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
      <p>
        <Link to="/friends">friends</Link>
      </p>
      <Copyright/>
    </div>
  )
}