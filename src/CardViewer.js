import React from 'react';
import './CardViewer.css';

class CardViewer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showFront: true,
            cards: this.props.cards,
        }
    }

    nextCard = () => {
        this.setState({ index: this.state.index + 1})
    }

    prevCard = () => {
        this.setState({ index: this.state.index - 1})
    }
    
    flipCard = () => {
        this.setState({ showFront: !this.state.showFront })
    }

    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <table>
                    <thead>
                        <tr>
                            <th>{this.state.showFront ? "Front" : "Back"}</th>
                        </tr>
                        <td onClick={this.flipCard} className="flashcard">{
                            this.state.showFront ? this.state.cards[this.state.index].front : this.state.cards[this.state.index].back}</td>
                        <tr>
                            <th><button disabled={this.state.index <= 0} id="prev" onClick={this.prevCard}>Previous Card</button>
                <button disabled={this.state.index >= this.state.cards.length - 1} id="next" onClick={this.nextCard}>Next Card</button></th>
                        </tr>
                        <tr>
                            <th>Progress: {this.state.index + 1} / {this.state.cards.length}</th>
                        </tr>
                    </thead>
                </table>
                <hr />
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        );
    }
}

export default CardViewer