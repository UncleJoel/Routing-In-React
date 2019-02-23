import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {},
        }
    }

    async componentDidMount() {
        try {
            let personData = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            let person = await personData.json();

            this.setState({ person })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <>
                <div className='row mt-5'>
                    <div className='card-body mt-5 bg-dark border border-info rounded text-white col-3 mx-auto'>
                        <h5 className='card-title border-bottom border-info text-center'>{this.state.person.name}</h5>
                        <p>Age: {this.state.person.age}</p>
                        <p>Gender: {this.state.person.gender}</p>
                        <p>Eye Color: {this.state.person.eye_color}</p>
                    </div>
                </div>

            </>
        )
    }
}

export default Person;