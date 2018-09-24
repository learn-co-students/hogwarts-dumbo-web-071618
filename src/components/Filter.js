import React from 'react'

const Filter = ({handleGreased, handleSearchTerm}) => {
    return (
      <div style={{marginBottom: '30px'}}>
          <select name="type" id="type" onChange={handleSearchTerm}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <label>Greased</label>
          <input type="checkbox" onChange={handleGreased}/>
        </div>
    )
}

export default Filter