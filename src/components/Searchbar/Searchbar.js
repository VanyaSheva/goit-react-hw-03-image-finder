import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import FetchImagesWithQuery from "../../services/FetchImages.js";
import Loader from "../Loader/Loader";

export default class Searchbar extends Component {
  state = {
    isLoading: false,
  };
  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    await FetchImagesWithQuery(this.props.value).then((images) => {
      this.props.onSubmit(images);
    });
    await this.setState({ isLoading: false });
  };

  render() {
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.onSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={styles.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.props.onInputQueryChange}
              value={this.props.value}
            />
          </form>
        </header>
        {this.state.isLoading && <Loader />}
      </>
    );
  }
}
