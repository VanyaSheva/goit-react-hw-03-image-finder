import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscPress);
  }

  handleEscPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    return;
  };
  render() {
    const { source } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={source} alt="bigImg" className={styles.img} />
        </div>
      </div>
    );
  }
}

export default Modal;
