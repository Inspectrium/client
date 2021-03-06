import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Inspectrium</Menu.Item>
        <Menu.Item
          name='About'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='Extenstion' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
