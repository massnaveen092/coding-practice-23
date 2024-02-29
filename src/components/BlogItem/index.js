// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogdata} = props
  const {id, imageUrl, topic, title, avatharUrl, author} = blogdata

  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div>
          <img src={imageUrl} alt={`item${id}`} />
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
          </div>
          <div>
            <img src={avatharUrl} alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
