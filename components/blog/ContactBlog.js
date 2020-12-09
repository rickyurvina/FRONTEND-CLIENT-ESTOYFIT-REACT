import React, { Component } from 'react';
import Link from 'next/link';

class ContactBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="post-controls-buttons">
                    <div>
                        <Link href="#">
                            <a>Post Previo</a>
                        </Link>
                    </div>

                    <div>
                        <Link href="#">
                            <a>Proximo Post</a>
                        </Link>
                    </div>
                </div>
                <div className="comments-area">
                    <h3 className="comments-title">0 Comentarios</h3>
                    <div className="comment-respond">
                        <h3 className="comment-reply-title">Deja Tu Comentario</h3>
                        <form className="comment-form">
                            <p className="comment-notes">
                                <span id="email-notes">Tu dirección de correo no será publicada.</span>
                    Campos requeridos están marcados
                    <span className="required">*</span>
                            </p>
                            <p className="comment-form-comment">
                                <label>Comentario</label>
                                <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required={true} />
                            </p>
                            <p className="comment-form-author">
                                <label>Nombre <span className="required">*</span></label>
                                <input type="text" id="author" name="author" required={true} />
                            </p>
                            <p className="comment-form-email">
                                <label>Correo <span className="required">*</span></label>
                                <input type="email" id="email" name="email" required={true} />
                            </p>
                            <p className="comment-form-url">
                                <label>Sitio Web</label>
                                <input type="url" id="url" name="url" />
                            </p>
                            <p className="comment-form-cookies-consent">
                                <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                {/* <label>Save my name, email, and website in this browser for the next time I comment.</label> */}
                                <label>Guardar mi nombre, correo y website en el navegdor para la siguiente vez que comente</label>
                            </p>
                            <p className="form-submit">
                                <input type="submit" name="submit" id="submit" className="submit" value="Publicar Comentario" />
                            </p>
                        </form>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
export default ContactBlog;