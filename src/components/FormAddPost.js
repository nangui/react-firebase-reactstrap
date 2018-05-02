import React, { Component } from 'react'
import { Form, FormGroup, Col, Input, Button } from 'reactstrap'
import { database } from '../firebase'

class FormAddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        // Binding des méthodes
        this.onInputChange = this.onInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * Cette méthode permet de suivre les changements des differents champs
     * @param {*} event 
     */
    onInputChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /**
     * Cette méthode permet de soumettre le formulaire
     * @param {*} event 
     */
    handleSubmit (event) {
        event.preventDefault()
        // On test si l'un des champs est vide
        if(this.state.title !== '' && this.state.body !== '') {
            // Nous allons créer un objet post à partir des données saisie
            // En plus du titre et le corps, notre post aura une date de création
            let post = {
                title: this.state.title,
                body: this.state.body,
                createAt:(new Date()).toLocaleString()
            }
            //console.log(post)
            database.push(post).then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            this.setState({
                title: '',
                body: ''
            })
        } else {
            console.log('Données non valide')
        }
    }

    render () {
        return <div>
            <h1 className="text-center">Nouveau post</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col sm={{ size: 8, offset: 2 }}>
                  <Input 
                   value={this.state.title} 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    onChange={this.onInputChange} 
                    ref="title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 8, offset: 2 }}>
                  <Input 
                    value={this.state.body} 
                    type="textarea" 
                    name="body" 
                    placeholder="Body" 
                    onChange={this.onInputChange} 
                    ref="body" />
                </Col>
              </FormGroup>
              <Button color="primary">Add</Button>
            </Form>
          </div>;
    }
}

export default FormAddPost