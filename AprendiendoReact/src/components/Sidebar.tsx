import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ blog }: { blog?: string }) {

  const [searchRef, setSearchRef] = useState({
    search: '',
    redirect: false
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRef({
      ...searchRef,
      [e.target.name]: e.target.value
    });
  };

  const redirectToSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/blog/busqueda/${searchRef.search}`);
  };

  return (
    <aside id="sidebar">
      {blog === 'true' &&
        <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <Link to={'/blog/crear'} className="btn btn-success">
            Crear artículo
          </Link>
        </div>
      }

      <div id="search" className="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form onSubmit={redirectToSearch}>
          <input
            type="text"
            name="search"
            value={searchRef.search}
            onChange={handleInputChange}
          />
          <input type="submit" name="submit" value="Buscar" className="btn" />
        </form>
      </div>
    </aside>
  );
  
}
