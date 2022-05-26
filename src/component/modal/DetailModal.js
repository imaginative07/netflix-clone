import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Modal } from "react-bootstrap";
import { FaPlay, FaExclamation } from "react-icons/fa";
import { BASE_IMG_URL } from '../../Request';

function DetailModal({movieDetail}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                type="button"
                className="btn btn-danger"
            >
                <FaPlay color="white" /> <span>Play</span>
            </Button>

            <Button type="button" className="btn btn-secondary" onClick={handleShow}>
                <FaExclamation color="white" /> <span>More info</span>
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header className="modal-image" closeButton style={{backgroundImage: `url(${BASE_IMG_URL}${movieDetail.backdrop_path})`}}></Modal.Header>
                
                <div className="modal-image-overlay"></div>

                <Modal.Body>
                    <Modal.Title>{movieDetail.name}</Modal.Title>
                    <div className="modal-header-description">{movieDetail.overview}</div>
                    
                    <div className="modal-detail-title">Info on <b>{movieDetail.name}</b></div>

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
