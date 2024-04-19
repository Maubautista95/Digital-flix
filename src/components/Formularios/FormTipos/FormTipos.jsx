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

function FormTipos({ tipoItems }) {

    const [nombreCrear, setNombreCrear] = useState("");
    const [descripcionCrear, setDescripcionCrear] = useState("");

    useEffect(() => {
        // Asignar valores vacíos por defecto al montar el componente
        setNombreCrear("");
        setDescripcionCrear("");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/tipos/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre: nombreCrear, descripcion: descripcionCrear }),
            });
            if (response.ok) {
                console.log("Tipo creado exitosamente.");
            } else {
                console.error("Error al crear el tipo:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [tipoABorrar, setTipoABorrar] = useState("");

    const handleSubmitBorrar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:4000/tipos/delete/${tipoABorrar}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Tipo borrado exitosamente.");
            } else {
                console.error("Error al borrar el tipo:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [nuevoNombreTipo, setNuevoNombreTipo] = useState("");
    const [nuevaDescripcionTipo, setNuevaDescripcionTipo] = useState("");
    const [tipoAEditar, setTipoAEditar] = useState("");

    useEffect(() => {
        // Asignar valores de tipoAEditar a los campos de edición al cambiar tipoAEditar
        if (tipoAEditar !== "") {
            const tipoEditando = tipoItems.find((tipo) => tipo._id === tipoAEditar);
            if (tipoEditando) {
                setNuevoNombreTipo(tipoEditando.nombre);
                setNuevaDescripcionTipo(tipoEditando.descripcion);
            }
        }
    }, [tipoAEditar, tipoItems]);

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:4000/tipos/update/${tipoAEditar}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre: nuevoNombreTipo, descripcion: nuevaDescripcionTipo }),
                }
            );
            if (response.ok) {
                console.log("Tipo actualizado exitosamente.");
                window.location.reload();
            } else {
                console.error("Error al actualizar el tipo:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return <>
        <h2>Todos los tipos</h2>

        <StyledTable>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    
                </tr>
            </thead>
            <tbody>
                {tipoItems.map((tipoItem) => (
                    <tr key={tipoItem._id}>
                        <td>{tipoItem.nombre}</td>
                        <td>{tipoItem.descripcion}</td>
                        
                    </tr>
                ))}
            </tbody>
        </StyledTable>

        <h2>Crear nuevo tipo</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre del tipo a crear</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombreCrear}
                    onChange={(e) => setNombreCrear(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="descripcion">Descripción del tipo</label>
                <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder="Descripción"
                    value={descripcionCrear}
                    onChange={(e) => setDescripcionCrear(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Crear tipo
            </button>
        </form>

        <h2>Borrar tipo</h2>

        <form onSubmit={handleSubmitBorrar}>
            <div className="form-group">
                <label htmlFor="tipoABorrar">Seleccionar tipo a borrar</label>
                <select
                    className="form-control"
                    id="tipoABorrar"
                    value={tipoABorrar}
                    onChange={(e) => setTipoABorrar(e.target.value)}
                >
                    <option value="">Seleccionar tipo</option>
                    {tipoItems.map((tipoItem) => (
                        <option key={tipoItem._id} value={tipoItem._id}>
                            {tipoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Borrar tipo
            </button>
        </form>

        <h2>Editar/Actualizar tipo</h2>

        <form onSubmit={handleSubmitEditar}>
            <div className="form-group">
                <label htmlFor="nuevoNombreTipo">Nuevo nombre para el tipo</label>
                <input
                    type="text"
                    className="form-control"
                    id="nuevoNombreTipo"
                    placeholder="Nuevo nombre"
                    value={nuevoNombreTipo}
                    onChange={(e) => setNuevoNombreTipo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="nuevaDescripcionTipo">Nueva descripción para el tipo</label>
                <input
                    type="text"
                    className="form-control"
                    id="nuevaDescripcionTipo"
                    placeholder="Nueva descripción"
                    value={nuevaDescripcionTipo}
                    onChange={(e) => setNuevaDescripcionTipo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="tipoAEditar">Seleccionar tipo a editar</label>
                <select
                    className="form-control"
                    id="tipoAEditar"
                    value={tipoAEditar}
                    onChange={(e) => setTipoAEditar(e.target.value)}
                >
                    <option value="">Seleccionar tipo</option>
                    {tipoItems.map((tipoItem) => (
                        <option key={tipoItem._id} value={tipoItem._id}>
                            {tipoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Actualizar tipo
            </button>
        </form>
    </>;
}

export default FormTipos;
