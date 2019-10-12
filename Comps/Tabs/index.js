import React from 'react'
import TabItem from './TabItem'

// container comp
export default class extends React.Component {
  state = {
    tabs: [
      { title: 'tab_1', },
      { title: 'tab_2', active: false },
      { title: 'tab_3', active: true },
    ]
  }
  render() {
    return (
      <div>
        {this.state.tabs.map(t => 
          <TabItem 
            title={t.title} 
            active={t.active}/>
        )}
      </div>
    )
  }
}