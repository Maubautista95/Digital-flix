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

function FormDirectores({ directorItems }) {

    const [nombreCrear, setNombreCrear] = useState("");
    const [estadoCrear, setEstadoCrear] = useState("Activo");

    useEffect(() => {
        setNombreCrear("");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://iudatabase.onrender.com/directores/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre: nombreCrear, estado: estadoCrear }),
            });
            if (response.ok) {
                console.log("Director creado exitosamente.");
            } else {
                console.error("Error al crear el director:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };


    const [directorABorrar, setDirectorABorrar] = useState("");

    const handleSubmitBorrar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/directores/delete/${directorABorrar}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Director borrado exitosamente.");
            } else {
                console.error("Error al borrar el director:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [nuevoNombreDirector, setNuevoNombreDirector] = useState("");
    const [estadoEditar, setEstadoEditar] = useState("Activo");
    const [directorAEditar, setDirectorAEditar] = useState("");

    useEffect(() => {
        if (directorAEditar !== "") {
            const directorEditando = directorItems.find((director) => director._id === directorAEditar);
            if (directorEditando) {
                setNuevoNombreDirector(directorEditando.nombre);
                setEstadoEditar(directorEditando.estado);
            }
        }
    }, [directorAEditar, directorItems]);

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/directores/update/${directorAEditar}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre: nuevoNombreDirector, estado: estadoEditar }),
                }
            );
            if (response.ok) {
                console.log("Director actualizado exitosamente.");
                window.location.reload();
            } else {
                console.error("Error al actualizar el director:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return <>
        <h2>Todos los directores</h2>

        <StyledTable>
            <thead>
                <tr>
                    <th>Director</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {directorItems.map((directorItem) => (
                    <tr key={directorItem._id}>
                        <td>{directorItem.nombre}</td>
                        <td>{directorItem.estado}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>

        <h2>Crear nuevo director</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombreCrear">Nombre del director a crear</label>
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
                Crear director
            </button>
        </form>

        <h2>Borrar director</h2>

        <form onSubmit={handleSubmitBorrar}>
            <div className="form-group">
                <label htmlFor="directorABorrar">Seleccionar director a borrar</label>
                <select
                    className="form-control"
                    id="directorABorrar"
                    value={directorABorrar}
                    onChange={(e) => setDirectorABorrar(e.target.value)}
                >
                    <option value="">Seleccionar director</option>
                    {directorItems.map((directorItem) => (
                        <option key={directorItem._id} value={directorItem._id}>
                            {directorItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Borrar director
            </button>
        </form>

        <h2>Editar/Actualizar director</h2>

        <form onSubmit={handleSubmitEditar}>
            <div className="form-group">
                <label htmlFor="nuevoNombreDirector">Nuevo nombre para el director</label>
                <input
                    type="text"
                    className="form-control"
                    id="nuevoNombreDirector"
                    placeholder="Nuevo nombre"
                    value={nuevoNombreDirector}
                    onChange={(e) => setNuevoNombreDirector(e.target.value)}
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
                <label htmlFor="directorAEditar">Seleccionar director a editar</label>
                <select
                    className="form-control"
                    id="directorAEditar"
                    value={directorAEditar}
                    onChange={(e) => setDirectorAEditar(e.target.value)}
                >
                    <option value="">Seleccionar director</option>
                    {directorItems.map((directorItem) => (
                        <option key={directorItem._id} value={directorItem._id}>
                            {directorItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Actualizar director
            </button>
        </form>
    </>;
}

export default FormDirectores;
