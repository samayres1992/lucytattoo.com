import { Link } from 'react-router-dom';
import "./Navigation.css";

export default () => (
  <nav class="grid grid-cols-1 justify-items-start md:justify-items-center">
    <ul>
      <li>
        <Link to='/portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link to='/'>Store</Link>
      </li>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
  </nav>
);