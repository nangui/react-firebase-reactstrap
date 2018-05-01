import React, { Component } from 'react'
import { Form, FormGroup, Col, Input, Button } from 'reactstrap'

class FormAddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    render () {
        return <div>
            <h1 className="text-center">Nouveau post</h1>
            <Form>
              <FormGroup row>
                <Col sm={{ size: 8, offset: 2 }}>
                  <Input type="text" name="title" placeholder="Title" onChange={this.onInputChange} ref="title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 8, offset: 2 }}>
                  <Input type="textarea" name="body" placeholder="Body" onChange={this.onInputChange} ref="body" />
                </Col>
              </FormGroup>
              <Button color="success">Add</Button>
            </Form>
          </div>;
    }
}

export default FormAddPost