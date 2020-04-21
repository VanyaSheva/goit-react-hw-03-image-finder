import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  render() {
    const { id, dataBig, webformatURL, onClick } = this.props;
    return (
      <li className={styles.ImageGalleryItem} id={id}>
        <img
          data-big={dataBig}
          src={webformatURL}
          alt="query"
          className={styles.ImageGalleryItemimage}
          onClick={onClick}
        />
      </li>
    );
  }
}
