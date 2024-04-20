import React, { useState } from "react";
import styled from "styled-components";

function FormMedia({ mediaItems, generoItems, productoraItems, directorItems, tipoItems }) {

    // Crear media
    const [serialCrear, setSerialCrear] = useState("");
    const [tituloCrear, setTituloCrear] = useState("");
    const [sinopsisCrear, setSinopsisCrear] = useState("");
    const [urlPeliculaCrear, setUrlPeliculaCrear] = useState("");
    const [urlImagenPortadaCrear, setUrlImagenPortadaCrear] = useState("");
    const [anhoEstrenoCrear, setAnhoEstrenoCrear] = useState("");
    const [generoCrear, setGeneroCrear] = useState("");
    const [directorCrear, setDirectorCrear] = useState("");
    const [productoraCrear, setProductoraCrear] = useState("");
    const [tipoCrear, setTipoCrear] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!serialCrear || !tituloCrear || !sinopsisCrear || !urlPeliculaCrear || !urlImagenPortadaCrear || !anhoEstrenoCrear || !generoCrear || !directorCrear || !productoraCrear || !tipoCrear) {
            console.error("Por favor complete todos los campos");
            return;
        }
        try {
            const response = await fetch("https://iudatabase.onrender.com/mediaitems/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    serial: serialCrear,
                    titulo: tituloCrear,
                    sinopsis: sinopsisCrear,
                    urlPelicula: urlPeliculaCrear,
                    imagenPortada: urlImagenPortadaCrear,
                    anhoEstreno: anhoEstrenoCrear,
                    generoPrincipal: generoCrear,
                    directorPrincipal: directorCrear,
                    productora: productoraCrear,
                    tipo: tipoCrear
                }),
            });
            if (response.ok) {
                console.log("Medio audivisual creado exitosamente.");
            } else {
                console.error("Error al crear el medio audivisual:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const [mediaABorrar, setMediaABorrar] = useState("");

    const handleSubmitBorrar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/mediaItems/delete/${mediaABorrar}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log("Película o serie borrada exitosamente.");
            } else {
                console.error("Error al borrar la película o serie:", response.statusText);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    //Lógica Editar

    // Estados para los campos del formulario
    const [tituloEditar, setTituloEditar] = useState("");
    const [sinopsisEditar, setSinopsisEditar] = useState("");
    const [urlPeliculaEditar, setUrlPeliculaEditar] = useState("");
    const [urlImagenPortadaEditar, setUrlImagenPortadaEditar] = useState("");
    const [anhoEstrenoEditar, setAnhoEstrenoEditar] = useState("");
    const [generoEditar, setGeneroEditar] = useState("");
    const [directorEditar, setDirectorEditar] = useState("");
    const [productoraEditar, setProductoraEditar] = useState("");
    const [tipoEditar, setTipoEditar] = useState("");
    const [mediaAEditar, setMediaAEditar] = useState("");

    // Función para manejar el cambio en el select de medios audiovisuales
    const handleMediaSelectChange = (e) => {
        const selectedMediaId = e.target.value;
        // Encontrar el medio audiovisual seleccionado en la lista de medios
        const selectedMedia = mediaItems.find(mediaItem => mediaItem._id === selectedMediaId);
        // Actualizar los estados de los campos del formulario con los valores del medio seleccionado
        if (selectedMedia) {
            setTituloEditar(selectedMedia.titulo || "");
            setSinopsisEditar(selectedMedia.sinopsis || "");
            setUrlPeliculaEditar(selectedMedia.urlPelicula || "");
            setUrlImagenPortadaEditar(selectedMedia.imagenPortada || "");
            setAnhoEstrenoEditar(selectedMedia.anhoEstreno || "");
            setGeneroEditar(selectedMedia.generoPrincipal || "");
            setDirectorEditar(selectedMedia.directorPrincipal || "");
            setProductoraEditar(selectedMedia.productora || "");
            setTipoEditar(selectedMedia.tipo.nombre || "");
        } else {
            // Si no se selecciona ningún medio, restablecer los campos del formulario
            setTituloEditar("");
            setSinopsisEditar("");
            setUrlPeliculaEditar("");
            setUrlImagenPortadaEditar("");
            setAnhoEstrenoEditar("");
            setGeneroEditar("");
            setDirectorEditar("");
            setProductoraEditar("");
            setTipoEditar("");
        }
    };

    const handleSubmitEditar = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://iudatabase.onrender.com/mediaItems/update/${mediaAEditar}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        titulo: tituloEditar,
                        sinopsis: sinopsisEditar,
                        urlPelicula: urlPeliculaEditar,
                        imagenPortada: urlImagenPortadaEditar,
                        anhoEstreno: anhoEstrenoEditar,
                        generoPrincipal: generoEditar,
                        directorPrincipal: directorEditar,
                        productora: productoraEditar,
                        tipo: tipoEditar
                    }),
                }
            );
            if (response.ok) {
                console.log("Medio audiovisual actualizado exitosamente.");
                window.location.reload();
            } else {
                console.error("Error al actualizar el medio audiovisual:", response.statusText);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };


    console.log(productoraEditar)

    return <>
        <h2>Crear nueva película o serie</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="serialCrear">Serial</label>
                <input type="text" className="form-control" id="serialCrear" placeholder="Serial" onChange={(e) => setSerialCrear(e.target.value)} />
                <label htmlFor="tituloCrear">Titulo</label>
                <input type="text" className="form-control" id="tituloCrear" placeholder="Titulo" onChange={(e) => setTituloCrear(e.target.value)} />
                <label htmlFor="sinopsisCrear">Sinopsis</label>
                <textarea type="text" className="form-control" id="sinopsisCrear" placeholder="Sinopsis" onChange={(e) => setSinopsisCrear(e.target.value)} />
                <label htmlFor="urlMovieCrear">URL de la película</label>
                <input type="text" className="form-control" id="urlMovieCrear" placeholder="Url de la pelicula/serie" onChange={(e) => setUrlPeliculaCrear(e.target.value)} />
                <label htmlFor="urlImagenPortada">Imagen de portada</label>
                <input type="text" className="form-control" id="urlImagenPortada" placeholder="Url de la imagen de portada" onChange={(e) => setUrlImagenPortadaCrear(e.target.value)} />
                <label htmlFor="anhoDeEstrenoCrear">Año de de estreno</label>
                <input type="text" className="form-control" id="anhoDeEstrenoCrear" placeholder="Año de estreno" onChange={(e) => setAnhoEstrenoCrear(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="seleccionDeGenero">Género</label>
                <select className="form-control" id="seleccionDeGenero" onChange={(e) => setGeneroCrear(e.target.value)}>
                    <option value="">Seleccionar género</option>
                    {generoItems.map((generoItem) => (
                        <option key={generoItem._id} value={generoItem._id}>
                            {generoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="seleccionDeDirector">Director</label>
                <select className="form-control" id="seleccionDeDirector" onChange={(e) => setDirectorCrear(e.target.value)}>
                    <option value="">Seleccionar director</option>
                    {directorItems.map((directorItem) => (
                        <option key={directorItem._id} value={directorItem._id}>
                            {directorItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="seleccionDeProductora">Productora</label>
                <select className="form-control" id="seleccionDeProductora" onChange={(e) => setProductoraCrear(e.target.value)}>
                    <option value="">Seleccionar productora</option>
                    {productoraItems.map((productoraItem) => (
                        <option key={productoraItem._id} value={productoraItem._id}>
                            {productoraItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="seleccionDeTipo">Tipo</label>
                <select className="form-control" id="seleccionDeTipo" onChange={(e) => setTipoCrear(e.target.value)}>
                    <option value="">Seleccionar tipo</option>
                    {tipoItems.map((tipoItem) => (
                        <option key={tipoItem._id} value={tipoItem._id}>
                            {tipoItem.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Crear Medio Audiovisual
            </button>
        </form>
        <h2>Borrar películas</h2>
        <form onSubmit={handleSubmitBorrar}>
            <div className="form-group">
                <label htmlFor="tipoABorrar">Seleccionar película o serie a borrar</label>
                <select className="form-control" id="tipoABorrar" value={mediaABorrar} onChange={(e) => setMediaABorrar(e.target.value)}>
                    <option value="">Seleccionar película o serie</option>
                    {mediaItems.map((mediaItem) => (
                        <option key={mediaItem._id} value={mediaItem._id}>
                            {mediaItem.titulo}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Borrar Película o Serie
            </button>
        </form>

        <h2>Editar películas</h2>

        <form onSubmit={handleSubmitEditar}>


            <div className="form-group">
                <label htmlFor="seleccionMedia">Medio audiovisual</label>
                <select
                    className="form-control"
                    id="seleccionMedia"
                    onChange={(e) => {
                        handleMediaSelectChange(e); // Llama a la primera función
                        setMediaAEditar(e.target.value); // Llama a la segunda función
                    }}
                >
                    <option value="">Seleccionar medio audiovisual</option>
                    {mediaItems.map((mediaItem) => (
                        <option key={mediaItem._id} value={mediaItem._id}>
                            {mediaItem.titulo}
                        </option>
                    ))}
                </select>
            </div>


            <div className="form-group">
                <label htmlFor="tituloEditar">Título</label>
                <input
                    type="text"
                    className="form-control"
                    id="tituloEditar"
                    placeholder="Título"
                    value={tituloEditar}
                    onChange={(e) => setTituloEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="sinopsisEditar">Sinopsis</label>
                <textarea
                    className="form-control"
                    id="sinopsisEditar"
                    placeholder="Sinopsis"
                    value={sinopsisEditar}
                    onChange={(e) => setSinopsisEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="urlPeliculaEditar">URL de la película</label>
                <input
                    type="text"
                    className="form-control"
                    id="urlPeliculaEditar"
                    placeholder="URL de la película"
                    value={urlPeliculaEditar}
                    onChange={(e) => setUrlPeliculaEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="urlImagenPortadaEditar">URL de la imagen de portada</label>
                <input
                    type="text"
                    className="form-control"
                    id="urlImagenPortadaEditar"
                    placeholder="URL de la imagen de portada"
                    value={urlImagenPortadaEditar}
                    onChange={(e) => setUrlImagenPortadaEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="anhoEstrenoEditar">Año de estreno</label>
                <input
                    type="text"
                    className="form-control"
                    id="anhoEstrenoEditar"
                    placeholder="Año de estreno"
                    value={anhoEstrenoEditar}
                    onChange={(e) => setAnhoEstrenoEditar(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="generoEditar">Género</label>
                <select
                    type="text"
                    className="form-control"
                    id="generoEditar"
                    placeholder="Género"
                    value={generoEditar}
                    onChange={(e) => setGeneroEditar(e.target.value)}
                >

                    <option value="">Seleccionar género</option>
                    {generoItems.map((generoItem) => (
                        <option key={generoItem._id} value={generoItem._id}>
                            {generoItem.nombre}
                        </option>
                    ))}
                    </select>
            </div>
            <div className="form-group">
                <label htmlFor="directorEditar">Director</label>
                <select
                    type="text"
                    className="form-control"
                    id="directorEditar"
                    placeholder="Director"
                    value={directorEditar}
                    onChange={(e) => setDirectorEditar(e.target.value)}
                >
                    <option value="">Seleccionar director</option>
                    {directorItems.map((directorItem) => (
                        <option key={directorItem._id} value={directorItem._id}>
                            {directorItem.nombre}
                        </option>
                    ))}
                
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="productoraEditar">Productora</label>
                <select
                    type="text"
                    className="form-control"
                    id="productoraEditar"
                    placeholder="Productora"
                    value={productoraEditar}
                    onChange={(e) => setProductoraEditar(e.target.value)}
                >
                    <option value="">Seleccionar productora</option>
                    {productoraItems.map((productoraItem) => (
                        <option key={productoraItem._id} value={productoraItem._id}>
                            {productoraItem.nombre}
                        </option>
                    ))}

                </select>
            </div>


            <div className="form-group">
                <label htmlFor="tipoEditar">Tipo</label>
                <select
                    type="text"
                    className="form-control"
                    id="tipoEditar"
                    placeholder="Tipo"
                    value={tipoEditar}
                    onChange={(e) => setTipoEditar(e.target.value)}
                >

                    {tipoItems.map((tipoItem) => (
                        <option key={tipoItem._id} value={tipoItem._id}>
                            {tipoItem.nombre}
                        </option>
                    ))}

                </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Editar Medio Audiovisual
            </button>
        </form>
    </>


}

export default FormMedia;

