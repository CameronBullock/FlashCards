import React from 'react';
import FlashCard from './FlashCard';

class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [
      {
        title: 'Card 1',
        front: 'React method to show HTML',
        back: 'the render method'
      }]
    };
  }

  displayFlashCards = () => {
    return this.state.cards.map( card => {
      return(<FlashCard card={card} />);
    });
  }

  render() {
    return(
      <div>
        { this.displayFlashCards() }
      </div>
    )
  }
}

export default FlashCards;
