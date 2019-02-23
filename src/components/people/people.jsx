import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(data => {
            this.setState({ people: data })
        })
    }

    render() {
        return (
            <>
                <div className='container-fluid text-white content-center mt-5'>
                    {this.state.people.map((people, index) => {
                        return (
                            <div key={index} className='card border-info round d-inline-flex bg-dark col-2 m-5'>
                                <div className='card-header border-info text-center '>{people.name}</div>
                                <div className='card-body mx-auto'> 
                                <Link className='btn btn-info rounded' to={`/people/${people.id}`}>Info</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

}

export default People;