import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const fungsiNavigasi = useNavigate();

  const anchorOnClickHandler = (event) => {
    event.preventDefault();
    fungsiNavigasi("/kedua");
  };

  return (
    <>
      <nav className="container">
        {/* Bagian Kiri */}
        <section>
          <h1 className="brand">Belajar Routing Lah</h1>
        </section>

        {/* Bagian Kanan */}
        <section className="section-link">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active-link" : "non-active-link"
            }
          >
            Halaman Pertama
          </NavLink>
          <a href="#" onClick={anchorOnClickHandler}>
            Halaman B
          </a>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
