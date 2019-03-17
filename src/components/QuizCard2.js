import React, { Component } from 'react';

class QuizCard2 extends Component {

    constructor(...args) {
        super(...args);

        this.attachRef = target => this.setState({ target });
        this.state = {
            show: false,
        };
    }

    render() {
        return (

            <>
                <div className="card text-left shadow animated bounceInRight" style={{height: '27rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Is Donald Trump Autistic?</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            abovetopsecret.com, 2016-10-27
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                                Donald Trump could have a disability that used to be known as Aspergers, and this can cause people trouble when they try to socialize because their theory of mind is not complete. Basically, they have trouble thinking of how others perceive their actions. These people tend to be highly intelligent. Trump's IQ is 156, which makes sense considering he has built more businesses than most of us have, and although he could have invested his father's money and made the same amount back as he did in the end through business deals, he put a lot of work and thought into his business. I would like to know what kind of medicines Trump is on and what his mental health diagnosis are. If he has Aspergers, then that would explain why he makes so many social mistakes. Being super rich from a young age might also account for it since he would not be trained to interact with people on an equal level (which is a lot more complicated than interacting with people when you are rich and they are poor). However, an article in The New York Times recently focused on Trump's fears of making social blunders. He has a fear of losing social status or being embarrassed publicly. However, he doesn't seem to do well publicly, which must be a disability because he would *want* to be a good public speaker and not make social gaffes yet he still does it. It must be accidental. Donald even stated he is a difficult man to be married to, which means he knows himself and his weaknesses. Many people with Aspergers don't get married because they have a hard time in relationships.
                            </small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard2