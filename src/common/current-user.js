import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cookie from 'cookie'

export const getCurrentUser = (context) => {
  const { req } = context

  const { token } = cookie.parse(
    req ? req.headers.cookie || '' : document.cookie
  )

  return token
}

// Context
const CurrentUserContext = React.createContext({
  user: null,
  setUser: () => {}
})

export const CurrentUser = CurrentUserContext.Consumer

export class CurrentUserProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.any
  }

  // eslint-disable-next-line react/sort-comp
  setUser = (user) => this.setState({ user })

  state = {
    user: this.props.user,
    setUser: this.setUser
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state}>
        {this.props.children}
      </CurrentUserContext.Provider>
    )
  }
}
