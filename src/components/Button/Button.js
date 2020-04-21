import React, { Component } from "react";
import styles from "./Button.module.css";
import FetchImagesWithQuery from "../../services/FetchImages.js";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";

class Button extends Component {
  state = {
    page: 2,
    isLoading: false,
  };

  onButtonClick = async () => {
    this.setState({ isLoading: true });
    this.setState((state) => ({
      page: (state.page += 1),
    }));
    await FetchImagesWithQuery(this.props.query, this.state.page).then(
      (images) => {
        this.props.onClick(images);
      }
    );
    await this.setState({ isLoading: false });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div className={styles.Container}>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <button className={styles.Button} onClick={this.onButtonClick}>
            Load More
          </button>
        )}
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Button;
