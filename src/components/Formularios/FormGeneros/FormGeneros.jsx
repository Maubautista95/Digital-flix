import { React, useState, useEffect } from "react";
import styled from "styled-components";


const StyledTable = styled.table`
    margin: 0 auto;
    text-align: center;
    width: 60%;
    border-collapse: collapse;

    th, td {
        text-align: center;
        border: 7px solid #white;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #9fd5d1;
        text-align: center;
        padding: 15px 0;
    }
    td{
        text-align: center;
        padding: 10px 0; 
    }
`;

function FormGeneros({ generoItems }) {

    const [nombreCrear, setNombreCrear] = useState("");
    const [estadoCrear, setEstadoCrear] = useState("Activo");

    useEffect(() => {
        setNombreCrear("");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://iudatabase.onrender.com/generos/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre: nombreCrear, estado: estadoCrear }),
            });
            if (response.ok) {
                console.log("Género creado exitosamente.");
            } else {
                console.error("Error al crear el género:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };


    const [generoABorrar, setGeneroABorrar] = useState("");

    const handleSubmitBorrar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/generos/delete/${generoABorrar}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Género borrado exitosamente.");
            } else {
                console.error("Error al borrar el género:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [nombreEditar, setNombreEditar] = useState("");
    const [estadoEditar, setEstadoEditar] = useState("Activo");
    const [generoAEditar, setGeneroAEditar] = useState("");

    useEffect(() => {
        if (generoAEditar !== "") {
            const generoEditando = generoItems.find((genero) => genero._id === generoAEditar);
            if (generoEditando) {
                setNombreEditar(generoEditando.nombre);
                setEstadoEditar(generoEditando.estado);
            }
        }
    }, [generoAEditar, generoItems]);

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/generos/update/${generoAEditar}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre: nombreEditar, estado: estadoEditar }),
                }
            );
            if (response.ok) {
                console.log("Género actualizado exitosamente.");
                window.location.reload();
            } else {
                console.error("Error al actualizar el género:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return <>
        <h2>Todos los géneros</h2>

        <StyledTable>
            <thead>
                <tr>
                    <th>Géneros</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {generoItems.map((generoItem) => (
                    <tr key={generoItem._id}>
                        <td>{generoItem.nombre}</td>
                        <td>{generoItem.estado}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>

        <h2>Crear nuevo género</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombreCrear">Nombre del género a crear</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombreCrear"
                    placeholder="Nombre"
                    value={nombreCrear}
                    onChange={(e) => setNombreCrear(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="estadoCrear">Estado</label>
                <select
                    className="form-control"
                    id="estadoCrear"
                    value={estadoCrear}
                    onChange={(e) => setEstadoCrear(e.target.value)}
                >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Crear género
            </button>
        </form>

        <h2>Borrar género</h2>

        <form onSubmit={handleSubmitBorrar}>
            <div className="form-group">
                <label htmlFor="generoABorrar">Seleccionar género a borrar</label>
                <select
                    className="form-control"
                    id="generoABorrar"
                    value={generoABorrar}
                    onChange={(e) => setGeneroABorrar(e.target.value)}
                >
                    <option value="">Seleccionar género</option>
                    {generoItems.map((generoItem) => (
                        <option key={generoItem._id} value={generoItem._id}>
                            {generoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Borrar género
            </button>
        </form>

        <h2>Editar género</h2>

        <form onSubmit={handleSubmitEditar}>
            <div className="form-group">
                <label htmlFor="nombreEditar">Nombre del género</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombreEditar"
                    placeholder="Nombre"
                    value={nombreEditar}
                    onChange={(e) => setNombreEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="estadoEditar">Estado</label>
                <select
                    className="form-control"
                    id="estadoEditar"
                    value={estadoEditar}
                    onChange={(e) => setEstadoEditar(e.target.value)}
                >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="generoAEditar">Seleccionar género a editar</label>
                <select
                    className="form-control"
                    id="generoAEditar"
                    value={generoAEditar}
                    onChange={(e) => setGeneroAEditar(e.target.value)}
                >
                    <option value="">Seleccionar género</option>
                    {generoItems.map((generoItem) => (
                        <option key={generoItem._id} value={generoItem._id}>
                            {generoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Actualizar género
            </button>
        </form>
    </>;
}

export default FormGeneros;
