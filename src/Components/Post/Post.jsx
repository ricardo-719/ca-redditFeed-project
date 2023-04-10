import './Post.css'

export const Post = ({ post }) => {

  //Format image links and posts title
 const img = post.preview && post.preview.images[0] && post.preview.images[0].source && post.preview.images[0].source.url.replace(/&amp;/g, '&');
 const formatTitle = post.title.replace(/&amp;/g, '&')
    
  return (
    <section className="postItem">
        <span className='voteCount' >{post.ups}</span>
        <div className='postSummary'>
          <span className='postAuthor'>Posted by {post.author}</span>
          <h3>{ formatTitle }</h3>
          { img ? (<img style={{maxWidth: '250px'}} src={ img } alt={ post.title } />) : (<p></p>) }
        </div>
    </section>
  )
}