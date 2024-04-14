import React, { Component } from 'react';
import pszenicaImage from './pictures/pszenica.png';
import pszenzytoImage from './pictures/pszenzyto.png';
import zytoImage from './pictures/zyto.png';
import kukurydzaImage from './pictures/kukurydza.png';
import owiesImage from './pictures/owies.png';
import jeczmienImage from './pictures/jeczmien.png';
//komponent stanowy
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.bannerImages = [
      pszenicaImage,
      pszenzytoImage,
      zytoImage,
      kukurydzaImage,
      owiesImage,
      jeczmienImage
    ];
  }

  componentDidMount() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.scrollY;
    const imageCount = this.bannerImages.length;
    const thresholdPercentage = 35; // Do ustawiania przebytego dystansu scrolla
    const threshold = (window.innerHeight * thresholdPercentage) / 100;

    let newIndex = Math.floor(scrollPosition / threshold);
    if (newIndex >= imageCount) {
      newIndex = imageCount - 1;
    }

    this.setState({ currentImageIndex: newIndex });
  }

  render() {
    return (
      <div className='banner'>
        <img src={this.bannerImages[this.state.currentImageIndex]} alt="Banner" className='banner'/>
      </div>
    );
  }
}

export default Banner;
