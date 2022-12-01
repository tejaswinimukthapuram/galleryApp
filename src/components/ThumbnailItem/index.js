// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const onThumbnailClick = () => {
    updateImage(imageDetails.id)
  }

  return (
    <li>
      <button onClick={onThumbnailClick}>
        <img
          src={imageDetails.thumbnailUrl}
          alt={imageDetails.thumbnailAltText}
          className="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
