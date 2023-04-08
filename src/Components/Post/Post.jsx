import './Post.css'

export const Post = (props) => {

  const { post } = props;
    
  return (
    <section className="postItem">
        <span className='voteCount' >{post.ups}</span>
        <div className='postSummary'>
          <span className='postAuthor'>Posted by {post.author}</span>
          <h3>{ post.title }</h3>
          <p>Preview goes here</p>
        </div>
    </section>
  )
}

//preview.images[0].source.url (But not all post contain images. A conditional must be put in place to avoid undefined issues)