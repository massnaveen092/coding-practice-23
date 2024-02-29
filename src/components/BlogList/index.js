// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogdata: [],
  }

  componentDidMount() {
    this.renderBlogItems()
  }

  renderBlogItems = async () => {
    const response = await fetch('htpps://apis.ccbp.in/blogs')
    const data = await response.json()

    const statusCode = await response.statusCode()
    console.log(statusCode)

    const updateddata = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatharUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({
      blogdata: updateddata,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogdata} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogdata.map(each => <BlogItem blogdata={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
