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
    const { name, uses, energy, protein } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="grain-info">
        <h2>{name}</h2>
        <button onClick={this.toggleExpanded}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        {isExpanded && (
          <div>
            <p>Zastosowania: {uses}</p>
            <p>Wartość odżywcza: {energy} kcal na 100g</p>
            <p>Zawartość białka: {protein}g na 100g</p>
          </div>
        )}
      </div>
    );
  }
}

export default GrainInfo;
