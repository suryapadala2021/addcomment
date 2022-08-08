import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comment extends Component {
  state = {name: '', comment: '', commentsArr: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBack =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const newComment = {
      id: v4(),
      name,
      comment,
      commentDate: new Date(),
      isLike: false,
      bg: initialBack,
    }

    this.setState(prev => ({
      name: '',
      comment: '',
      commentsArr: [...prev.commentsArr, newComment],
    }))
  }

  like = uniqueId => {
    const {commentsArr} = this.state
    this.setState({
      commentsArr: commentsArr.map(obj => {
        if (obj.id === uniqueId) {
          return {...obj, isLike: !obj.isLike}
        }
        return obj
      }),
    })
  }

  delete = uniqueId => {
    const {commentsArr} = this.state
    const filtered = commentsArr.filter(obj => obj.id !== uniqueId)
    this.setState({commentsArr: filtered})
  }

  render() {
    const {name, comment, commentsArr} = this.state
    return (
      <div className="bg-container">
        <div className="bg-cotainer-lg">
          <div className="responsive-container">
            <div className="comment-box-lg">
              <h1 className="main-heading">Comments</h1>
              <div className="comment-img-container-sm">
                <img
                  className="comment-img"
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  alt="comments"
                />
              </div>
              <p className="Description">
                Say something about 4.0 Technologies
              </p>
              <form onSubmit={this.addComment}>
                <input
                  value={name}
                  onChange={this.onChangeName}
                  placeholder="Your Name"
                  type="text"
                  className="your-name"
                />
                <textarea
                  value={comment}
                  onChange={this.onChangeComment}
                  placeholder="Your Comment"
                  rows="8"
                  cols="70"
                  className="text-area"
                />
                <button className="submit-btn" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="comment-image-lg"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <hr className="divider" />
          <p className="comment-count-box">
            <span className="count">{commentsArr.length}</span> Comments
          </p>
          <ul className="comments-list">
            {commentsArr.map(c => (
              <CommentItem
                deleted={this.delete}
                like={this.like}
                key={c.id}
                details={c}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comment
