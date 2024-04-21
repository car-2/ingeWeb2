import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function ProductoraV() {
  const [Visual, setVisual] = useState([]);

  const getProductora = async () => {
      const response = await fetch('http://localhost:12330/productora', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      setVisual(data);
  }

  const eliminar = (id) =>{
      fetch(`http://localhost:12330/productora/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      setVisual(Visual.filter((productora) => productora._id !== id));
  }

  useEffect(() => {
    getProductora();
  }, []);

  return (
    <div>
    <h1>Visualización de Productora</h1>
    <table className="">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Slogan</th>
                <th>Descripcion</th>
                <th>Fecha de Creación</th>
                <th>Fecha de Actualización</th>
            </tr>
        </thead>
        <tbody>
            {Visual.map((productora) => (
                <tr key={productora._id}>
                    <td>{productora.Nombre}</td>
                    <td>{productora.Estado}</td>
                    <td>{productora.Slogan}</td>
                    <td>{productora.Descripcion}</td>
                    <td>{productora.fechaCreacion}</td>
                    <td>{productora.fechaActualizacion}</td>
                    <td>{<Link to={`/edicion/productora/${productora._id}`}>Editar</Link>}</td>
                    <td>{<button type='button' onClick={() => eliminar(productora._id)}>Borrar</button>}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}
