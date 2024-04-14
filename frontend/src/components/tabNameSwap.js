import React, { Component } from 'react';

class TitleChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleOptions: ['Nie zapomnij o Nas!', 'Największa baza danych', 'produktów rolniczych'],
      originalTitle: document.title,
      intervalId: null
    };
  }

  componentDidMount() {
    const { titleOptions, originalTitle } = this.state;

    const changeTitle = () => {
      let currentIndex = 0;
      const id = setInterval(() => {
        document.title = titleOptions[currentIndex];
        currentIndex = (currentIndex + 1) % titleOptions.length;
      }, 2000);
      this.setState({ intervalId: id });
    };

    window.addEventListener('focus', () => {
      clearInterval(this.state.intervalId);
      document.title = originalTitle;
    });

    window.addEventListener('blur', () => {
      clearInterval(this.state.intervalId);
      changeTitle();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('focus', () => {
      clearInterval(this.state.intervalId);
      document.title = this.state.originalTitle;
    });
    window.removeEventListener('blur', () => {
      clearInterval(this.state.intervalId);
      this.changeTitle();
    });
  }

  render() {
    return null; // This component doesn't render anything visible
  }
}

export default TitleChanger;
