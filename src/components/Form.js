import React from 'react';
import PropTypes from 'prop-types';

const rootStyle = {
  width: '150px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #cccccc',
};

const buttonStyle = {
  padding: '5px',
  borderRadius: '4px',
};

/*
  Input form for the user name
 */

class Form extends React.Component {
  static propTypes = {
    // send the entered name
    onClick: PropTypes.func,
  };

  handleClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onClick(this.inputElement.value);
  };

  render () {
    return (
      <form onSubmit={this.handleClick}>
        <div style={rootStyle}>
          <div style={{ margin: '1em 0 1em 0' }}>
            <input
              ref={me => this.inputElement = me}
              type="text"
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={this.handleClick}
              style={buttonStyle}
            >
              Click
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
