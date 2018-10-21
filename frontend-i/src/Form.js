import React, { Component } from 'react'
import { Header, Input, Button } from 'semantic-ui-react'


class Form extends Component {

constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

render() {
    return (
        <div>
            <Header
            as='h1'
            content='YOUR OWN PERSONAL VIDEO 
            SAFETY TASTE TESTER'
            subheader='(Paste a link to let us see if it is safe to view.)'
            />
            <Input label='http://' placeholder='youtube.com' />
            <Button content="Go"/>
        </div>
        )
    }
}

export default Form