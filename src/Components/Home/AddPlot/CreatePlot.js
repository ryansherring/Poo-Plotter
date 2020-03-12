import React, { Component } from 'react'
import { Button, Modal, Form, } from 'semantic-ui-react';
import axios from 'axios'
// import { render } from '@testing-library/react';



class CreatePlot extends Component {
  state = {
    plotName: '',
    plotSize: '',
    plants: [],
    show: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; // makes the form fillable

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    axios.post(`${process.env.REACT_APP_API_URL}/plots/create`, this.state, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.props.getPlots();
        this.close();
      }).catch(err => {
        console.log(err.response);
      }); // on submit
  };

  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Button onClick={this.open}> create! </Button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Create!</Modal.Header>
          <Modal.Content Form>
            <Modal.Description>
              <p>Create!</p>
            </Modal.Description>
            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-4 offset-md-4'>
                  <h4 className='mb-3'>Create</h4>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <label htmlFor='name'>Plot Name</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='text'
                        id='plotName'
                        name='plotName'
                        value={this.state.plotName}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor='name'>plotSize</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='number'
                        id='plotSize'
                        name='plotSize'
                        value={this.state.plotSize}
                      />
                    </Form.Field>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button className='btn btn-primary float-right' onClick={this.handleSubmit}>
              create
              </button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}




export default CreatePlot;