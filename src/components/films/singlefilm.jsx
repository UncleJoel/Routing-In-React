import React, { Component } from 'react';

class SingleFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {},
        }
    }

    async componentDidMount() {
        try {
            let filmData = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`);
            let film = await filmData.json();

            this.setState({ film })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className='row mt-5'>
                <div className='card-body col-3 bg-dark text-white border border-info rounded mx-auto m-5'>
                    <h5 className='card-title border-bottom border-info text-center'>{this.state.film.title}</h5>
                    <p>Director: {this.state.film.director}</p>
                    <p>Producer: {this.state.film.producer}</p>
                    <p>Release: {this.state.film.release_date}</p>
                    <p>Tomato Score: {this.state.film.rt_score}%</p>
                </div>
            </div>
        )
    }
}

export default SingleFilm;
