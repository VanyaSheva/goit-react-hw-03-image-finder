import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import List from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

let src;

export default class App extends Component {
  state = {
    images: [],
    error: null,
    query: "",
    isOpen: false,
  };

  onInputQueryChange = (e) => {
    this.setState({ query: e.target.value });
  };

  openModal = (bigImg) => {
    this.setState({ isOpen: true });
    src = bigImg;
  };
  closeModal = () => this.setState({ isOpen: false });

  onGetImages = (newImages) => {
    this.setState({
      images: [],
    });
    this.setState((state) => ({
      images: [...state.images, ...newImages],
    }));
  };

  onLoadMore = (images) => {
    this.setState((state) => ({
      images: [...state.images, ...images],
    }));
  };

  render() {
    const { images, isOpen, query } = this.state;
    return (
      <div>
        <Searchbar
          onSubmit={this.onGetImages}
          onInputQueryChange={this.onInputQueryChange}
          query={query}
        />
        {images.length > 0 && (
          <>
            <List imagesData={images} onOpenModal={this.openModal} />
            <Button onClick={this.onLoadMore} query={query} />
          </>
        )}
        {isOpen && <Modal onClose={this.closeModal} source={src} />}
      </div>
    );
  }
}
