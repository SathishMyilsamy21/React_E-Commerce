import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

import "./Sidebar.css";

function Sidebar({handleChange}) {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </div>
  );
}

export default Sidebar;
