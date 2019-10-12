import React, { Component } from 'react'

export default Comp => 
  class extends Component {
    getClassName = () => {
      let clsName = 'tab-item'
      if (this.props.active) 
        return clsName + ' active'
      return clsName
    }

    render() {
      return <Comp 
        className={this.getClassName()} 
        {...this.props}/>
    }
  }
