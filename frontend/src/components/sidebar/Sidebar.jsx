import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ categories }) => {
    return (
      <div className="sidebar">
        <h5 className="sidebar-title">CATEGORIES</h5>
        <ul className="sidebar-links">
          {categories.map((category) => (
            <Link
              to={`/recipes/categories/${category.title}`}
              key={category._id}
              className="sidebar-link"
            >
              {category.title}
            </Link>
          ))}
        </ul>
      </div>
    );
  };

  export default Sidebar;
