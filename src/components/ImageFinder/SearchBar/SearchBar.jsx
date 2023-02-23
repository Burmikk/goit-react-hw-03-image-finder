import { Component } from 'react';
import PropTypes from 'prop-types';
import scss from './searchBar.module.scss';
class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ imageName: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);

    this.reset();
  };

  reset() {
    this.setState({ imageName: '' });
  }

  render() {
    return (
      <header className={scss.header}>
        <form className={scss.form} onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  close: PropTypes.func,
};

export default SearchBar;
