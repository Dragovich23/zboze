import React, { Component } from 'react';
//komponent stanowy
//propsy
class GrainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
//zdarzenie
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
        <p>Zastosowania: {uses}</p>
        <button onClick={this.toggleExpanded}>
          {isExpanded ? 'Ukryj te cudowne statystyki' : 'Przepraszam, otworzyć?'}
        </button>
        {isExpanded && (
          <div>
            
            <p>Wartość odżywcza: {energy} kcal na 100g</p>
            <p>Zawartość białka: {protein}g na 100g</p>
          </div>
        )}
      </div>
    );
  }
}

export default GrainInfo;
