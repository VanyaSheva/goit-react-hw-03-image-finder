import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

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

export default List;
