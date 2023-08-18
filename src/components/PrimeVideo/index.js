// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const action = 'ACTION'
const comedy = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === action,
  )

  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === comedy,
  )

  return (
    <div className="prime-video-container">
      <img
        className="cover-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
