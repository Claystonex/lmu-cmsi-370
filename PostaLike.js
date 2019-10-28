import React from 'react'

import './SearchResults.css'

import GiphyImage from './GiphyImage'

const like = props => (
  <div className="liked">
    {props.results.map(image => <GiphyImage key={image.id} image={image} />)}
  </div>
)

export default SearchResults