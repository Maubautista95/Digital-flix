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

function FormProductoras({ productoraItems }) {

    const [nombreCrear, setNombreCrear] = useState("");
    const [estadoCrear, setEstadoCrear] = useState("Activo"); 
    const [sloganCrear, setSloganCrear] = useState("");
    const [descripcionCrear, setDescripcionCrear] = useState("");

    useEffect(() => {
        // Limpiar campos al montar el componente
        setNombreCrear("");
        setSloganCrear("");
        setDescripcionCrear("");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/productoras/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre: nombreCrear, estado: estadoCrear, slogan: sloganCrear, descripcion: descripcionCrear }),
            });
            if (response.ok) {
                console.log("Productora creada exitosamente.");
            } else {
                console.error("Error al crear la productora:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [productoraABorrar, setProductoraABorrar] = useState("");

    const handleSubmitBorrar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:4000/productoras/delete/${productoraABorrar}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Productora borrada exitosamente.");
            } else {
                console.error("Error al borrar la productora:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [nombreEditar, setNombreEditar] = useState("");
    const [estadoEditar, setEstadoEditar] = useState("Activo"); // Valor predeterminado 'Activo'
    const [sloganEditar, setSloganEditar] = useState("");
    const [descripcionEditar, setDescripcionEditar] = useState("");
    const [productoraAEditar, setProductoraAEditar] = useState("");

    useEffect(() => {
        // Asignar valores de productoraAEditar a los campos de edición al cambiar productoraAEditar
        if (productoraAEditar !== "") {
            const productoraEditando = productoraItems.find((productora) => productora._id === productoraAEditar);
            if (productoraEditando) {
                setNombreEditar(productoraEditando.nombre);
                setEstadoEditar(productoraEditando.estado);
                setSloganEditar(productoraEditando.slogan);
                setDescripcionEditar(productoraEditando.descripcion);
            }
        }
    }, [productoraAEditar, productoraItems]);

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:4000/productoras/update/${productoraAEditar}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre: nombreEditar, estado: estadoEditar, slogan: sloganEditar, descripcion: descripcionEditar }),
                }
            );
            if (response.ok) {
                console.log("Productora actualizada exitosamente.");
                window.location.reload();
            } else {
                console.error("Error al actualizar la productora:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    //Editar

    return <>
        <h2>Todas las productoras</h2>

        <StyledTable>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Slogan</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {productoraItems.map((productoraItem) => (
                    <tr key={productoraItem._id}>
                        <td>{productoraItem.nombre}</td>
                        <td>{productoraItem.estado}</td>
                        <td>{productoraItem.slogan}</td>
                        <td>{productoraItem.descripcion}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>

        <h2>Crear nueva productora</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombreCrear">Nombre de la productora</label>
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
                <label htmlFor="estadoCrear">Estado de la productora</label>
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
            <div className="form-group">
                <label htmlFor="sloganCrear">Slogan de la productora</label>
                <input
                    type="text"
                    className="form-control"
                    id="sloganCrear"
                    placeholder="Slogan"
                    value={sloganCrear}
                    onChange={(e) => setSloganCrear(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="descripcionCrear">Descripción de la productora</label>
                <input
                    type="text"
                    className="form-control"
                    id="descripcionCrear"
                    placeholder="Descripción"
                    value={descripcionCrear}
                    onChange={(e) => setDescripcionCrear(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Crear productora
            </button>
        </form>

        <h2>Borrar productora</h2>

        <form onSubmit={handleSubmitBorrar}>
            <div className="form-group">
                <label htmlFor="productoraABorrar">Seleccionar productora a borrar</label>
                <select
                    className="form-control"
                    id="productoraABorrar"
                    value={productoraABorrar}
                    onChange={(e) => setProductoraABorrar(e.target.value)}
                >
                    <option value="">Seleccionar productora</option>
                    {productoraItems.map((productoraItem) => (
                        <option key={productoraItem._id} value={productoraItem._id}>
                            {productoraItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Borrar productora
            </button>
        </form>

        <h2>Editar/Actualizar productora</h2>

        <form onSubmit={handleSubmitEditar}>
            <div className="form-group">
                <label htmlFor="nombreEditar">Nombre de la productora</label>
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
                <label htmlFor="estadoEditar">Estado de la productora</label>
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
                <label htmlFor="sloganEditar">Slogan de la productora</label>
                <input
                    type="text"
                    className="form-control"
                    id="sloganEditar"
                    placeholder="Slogan"
                    value={sloganEditar}
                    onChange={(e) => setSloganEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="descripcionEditar">Descripción de la productora</label>
                <input
                    type="text"
                    className="form-control"
                    id="descripcionEditar"
                    placeholder="Descripción"
                    value={descripcionEditar}
                    onChange={(e) => setDescripcionEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="productoraAEditar">Seleccionar productora a editar</label>
                <select
                    className="form-control"
                    id="productoraAEditar"
                    value={productoraAEditar}
                    onChange={(e) => setProductoraAEditar(e.target.value)}
                >
                    <option value="">Seleccionar productora</option>
                    {productoraItems.map((productoraItem) => (
                        <option key={productoraItem._id} value={productoraItem._id}>
                            {productoraItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Actualizar productora
            </button>
        </form>
    </>;
}

export default FormProductoras;

