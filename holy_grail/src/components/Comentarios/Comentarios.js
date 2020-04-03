import React, { Fragment } from 'react';
import comentario from './../../img/comentario.jpg';

const Comentarios = () => {
    return (
        <Fragment>

            <h2>Comentarios</h2>

            <div className="contenedor">

                <div className="contenedor-comentario">
                    <img className="avatar" src={comentario} alt="comentarios"/>
                    <div className="contenido-comentario">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, esse? Nihil repellendus rem numquam animi. Molestias voluptatem voluptate corporis incidunt rerum impedit soluta hic nulla, perferendis dolorum, voluptatibus dicta voluptates!</p>
                        <div className="contenedor-comentario segundo-nivel">
                            <img className="avatar" src={comentario} alt="comentarios"/>
                            <div className="contenido-comentario">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, esse? Nihil repellendus rem numquam animi. Molestias voluptatem voluptate corporis incidunt rerum impedit soluta hic nulla, perferendis dolorum, voluptatibus dicta voluptates!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-comentario">
                    <img className="avatar" src={comentario} alt="comentarios"/>
                    <div className="contenido-comentario">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, esse? Nihil repellendus rem numquam animi. Molestias voluptatem voluptate corporis incidunt rerum impedit soluta hic nulla, perferendis dolorum, voluptatibus dicta voluptates!</p>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}
 
export default Comentarios;