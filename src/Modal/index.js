import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = () => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
	return <aside className={classes.modal}>{props.children}</aside>;
};

const Modal = (props) => {
	return (
		<Fragment>
			{createPortal(<Backdrop />, document.getElementById("backdrop"))}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById("modals")
			)}
		</Fragment>
	);
};

export default Modal;
