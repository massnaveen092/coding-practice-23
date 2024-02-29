// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    isLoading: true,
    blogdata: {},
  }

  componentDidMount() {
    this.getBlogDetailsList()
  }

  getBlogDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updateddata = {
      title: data.title,
      content: data.content,
      imageUrl: data.image_url,
      avatharUrl: data.avathar_url,
      author: data.author,
    }

    this.setState({
      blogdata: updateddata,
      isLoading: false,
    })
  }

  renderBlogItemDetails = () => {
    const {blogdata} = this.state
    const {author, imageUrl, avatharUrl, title, content} = blogdata

    return (
      <div>
        <h2>{title}</h2>
        <div>
          <img src={avatharUrl} alt={author} />
          <p>{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt={title} />
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="Loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
