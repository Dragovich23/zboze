import React, { Component } from 'react';
//komponent stanowy
class GrainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpanded = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    const { name, type, origin, nutritionalValue } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="grain-info">
        <h2>{name}</h2>
        <button onClick={this.toggleExpanded}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        {isExpanded && (
          <div>
            <p>Type: {type}</p>
            <p>Origin: {origin}</p>
            <p>Nutritional Value: {nutritionalValue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GrainInfo;
