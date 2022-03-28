import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

const CommentsSection = () => {
  return (
    <section className='flex flex-col items-stretch gap-2'>
      <h2>Comments</h2>
      <CommentsCell />
      <CommentForm />
    </section>
  )
}

export default CommentsSection
