import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { Modal } from "react-bootstrap";
import { BASE_IMG_URL } from '../../service/Request';
import { FaPlay, FaPlus } from "react-icons/fa";

function DetailModal({movieDetail}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePlay = () => setShow(true);

    return (
        <>
            <a type="button" className="poster-button" onClick={handlePlay}>
                <FaPlay color="black" />
            </a>

            <a
                type="button"
                className="poster-button"
                onClick={handleShow}
            >
                <FaPlus color="black" />
            </a>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header className="modal-image" closeButton style={{backgroundImage: `url(${BASE_IMG_URL}${movieDetail.backdrop_path})`}}></Modal.Header>
                
                <div className="modal-image-overlay"></div>

                <Modal.Body>
                    <Modal.Title>{movieDetail.title ?? movieDetail.original_title ?? movieDetail.name}</Modal.Title>
                    
                    <div className="modal-header-description">{movieDetail.overview}</div>
                    
                    <div className="modal-detail-title">Info on <b>{movieDetail.title ?? movieDetail.original_title ?? movieDetail.name}</b></div>

                    <div className="modal-detail-attribute">
                        <ul>
                            <li>First air date: <span>{movieDetail.first_air_date || "Not available"}</span></li>
                            <li>Average vote: <span>{movieDetail.vote_average || "Not available"}</span></li>
                            <li>Language: <span>{movieDetail.original_language}</span></li>
                        </ul>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default DetailModal;
