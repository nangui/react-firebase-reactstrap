import React, { Component } from 'react'
import { Form, FormGroup, Col, Input, Button } from 'reactstrap'
import { database } from '../firebase'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class FormAddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        // Binding des méthodes
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    /**
     * Cette méthode permet de suivre les changements de notre editeur wiziwig
     * @param {*} event 
     */
    onHandleChange (event) {
        this.setState({
            body: event
        })
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
                <Col sm={{ size: 8}}>
                  <Input 
                   value={this.state.title} 
                    type="text" 
                    name="title" 
                    placeholder="Write your post title here" 
                    onChange={(event) => {this.setState({title: event.target.value})}} 
                    ref="title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 12}}>
                  <ReactQuill 
                    modules={FormAddPost.modules}
                    formats={FormAddPost.formats}
                    value={this.state.body} 
                    placeholder="Write your post content here" 
                    onChange={this.onHandleChange} 
                  />
                </Col>
              </FormGroup>
              <Button color="primary">Add Post</Button>
            </Form>
          </div>;
    }
}

FormAddPost.modules = {
    toolbar: [
        [ {header: '1'}, {header: '2'}, {font: []} ],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}  

FormAddPost.formats = [
    'header', 
    'font', 
    'size',
    'bold', 
    'italic', 
    'underline', 
    'strike', 
    'blockquote',
    'list', 
    'bullet',
    'link', 
    'image', 
    'video', 
    'code-block'
]

export default FormAddPost