import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, like, deleted} = props
  const {id, name, comment, commentDate, bg, isLike} = details
  const clickLike = () => {
    like(id)
  }
  const onDelete = () => {
    deleted(id)
  }
  const liked = isLike ? 'liked' : ''
  return (
    <li>
      <div className="comment-item">
        <span className={`surname ${bg}`}>{name[0]}</span>
        <div className="comment-box">
          <span className="commenter">{name}</span>
          <span className="comment-time">
            {formatDistanceToNow(commentDate)}
          </span>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-box">
        <div>
          <button type="button" className="btn" onClick={clickLike}>
            {!isLike && (
              <img
                className="like-image"
                id="likeImage"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt=" like"
              />
            )}
            {isLike && (
              <img
                className="like-image"
                id="likeImage"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt=" like"
              />
            )}
            <label className={`like ${liked}`} htmlFor="likeImage">
              Like
            </label>
          </button>
        </div>
        <button
          testId="delete"
          type="button"
          className="btn"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="divider" />
    </li>
  )
}
export default CommentItem
