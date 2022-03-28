import CommentsCell from 'src/components/CommentsCell'
import CommentForm from 'src/components/CommentForm'

const CommentsSection = () => {
  return (
    <section className='flex flex-col items-stretch gap-8 px-4 py-6'>
      <CommentsCell />
      <CommentForm />
    </section>
  )
}

export default CommentsSection
