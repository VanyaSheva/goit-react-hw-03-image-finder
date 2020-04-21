import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  render() {
    const { dataBig, webformatURL, onClick } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
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

ImageGalleryItem.propTypes = {
  dataBig: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
