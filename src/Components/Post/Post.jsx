import './Post.css'

export const Post = (props) => {

  const { post } = props;
    
  return (
    <section className="postItem">
        <h2>{ post.title }</h2>
        <p>Picture or Content HERE</p>
    </section>
  )
}

