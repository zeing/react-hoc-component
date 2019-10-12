

import React from 'react'
import hoc from './HOC/enhancedComp'
import capitalTitleHoc from './HOC/capitalTitleEnhancer'
import { compose } from 'lodash/fp'

let TabItem = ({ title, className }) => 
  <div className={className}>{ title }</div>

export default compose(
  hoc,
  capitalTitleHoc
)(TabItem)

TabItem.PropsType = {
  title: String,
  className: String,
}