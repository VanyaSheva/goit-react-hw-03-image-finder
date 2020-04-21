import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const List = ({ imagesData, onOpenModal }) => (
  <ul className={styles.ImageGallery}>
    {imagesData.map((image) => (
      <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        dataBig={image.largeImageURL}
        onClick={() => onOpenModal(image.largeImageURL)}
      />
    ))}
  </ul>
);

List.propTypes = {
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onOpenModal: PropTypes.func.isRequired,
};

export default List;
