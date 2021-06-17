import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const VisibilityFilter = (props) => {
  const handleFilter=(event)=>{
    event.preventDefault()
    props.filterChange(event.target.value)
}
  return (
    <div>
     filter<input onChange={handleFilter}></input>
    </div>
  )
}

const mapDispatchToProps = {
  filterChange
}
const ConnectedFilter=connect(null,mapDispatchToProps)(VisibilityFilter)
export default ConnectedFilter