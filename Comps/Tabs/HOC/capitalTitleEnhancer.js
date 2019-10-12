import React from 'react'

export default Comp => 
  class extends React.Component {
    getTitle = () => {
      return this.props.title.toUpperCase()
    }

    render() {
      return <Comp 
        {...this.props}
        title={this.getTitle()}/>
    }
  }