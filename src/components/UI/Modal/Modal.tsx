import Backdrop from "./Backdrop.tsx";
import React from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    closeModal: () => void;
    defaultModalBtn?: boolean;
}

const Modal: React.FC<Props> = ({show, title = 'Modal title', children, closeModal, defaultModalBtn}) => {

    return (
        <>
            <Backdrop show={show} onClick={closeModal}/>
            <div className="modal show" style={{display: show ? 'block' : 'none', width: "500px", position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                        </div>
                        <div className="p-2">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {defaultModalBtn ? <button onClick={closeModal} className="btn btn-primary" type="button">Close</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;