import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

const CommentsSection = ({ postId }) => {
  return (
    <section className='flex flex-col items-stretch gap-8 px-12 py-12'>
      <CommentsCell postId={postId} />
      <CommentForm postId={postId} />
    </section>
  )
}

export default CommentsSection
