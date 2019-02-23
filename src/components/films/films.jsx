import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/Films')
        .then(res => res.json())
        .then(data => {
            this.setState({films: data})
        })
    }
   
    render() {
        return (
            <>
                <div className='container-fluid text-white content-center mt-5'>
                    {this.state.films.map((film, index) => {
                        return (
                            <div key={index} className='card border-info round d-inline-flex bg-dark col-3 m-5 '>
                                <div className='card-header border-info text-center '>{film.title}</div>
                                <div className='card-body'>
                                    <p className='card-text'>{film.description}</p>
                                    <Link className='btn btn-info rounded' to={`/films/${film.id}`}>More Info</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

}
export default Films;
