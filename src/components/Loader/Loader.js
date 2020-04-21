import React from "react";
import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderPreview = () => (
  <div className={styles.wrapper}>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      style={{ margin: "0 auto" }}
    />
  </div>
);

export default LoaderPreview;
