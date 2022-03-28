import Window from 'src/components/Window'
import {
  Form,
  FormProps,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

interface CommentFormPropTypes extends FormProps {}

const CommentForm = ({
  className,
  ...props
}: CommentFormPropTypes): JSX.Element => {
  return (
    <Window
      className={['bg-purple-300 rounded-[6px] min-w-full', className].join(
        ' '
      )}
      childrenAttributes={{
        header: {
          children: <Window.Header>Leave a Comment</Window.Header>,
          className: 'bg-purple-800 p-3 rounded-t-[6px]',
        },
        body: {
          className: 'p-3 rounded-b-[6px]',
        },
      }}
      {...props}
    >
      <Form className='flex flex-col items-stretch gap-4 p-2 w-full'>
        <div className='flex flex-col'>
          <Label name='name' className=''>
            Name
          </Label>
          <TextField name='name' className='' validation={{ required: true }} />
        </div>
        <div className='flex flex-col'>
          <Label name='body' className=''>
            Comment
          </Label>
          <TextAreaField
            name='body'
            className=''
            validation={{ required: true }}
          />
        </div>
        <Submit className='bg-indigo-600 self-stretch p-2 rounded-[8px]'>
          Submit
        </Submit>
      </Form>
    </Window>
  )
}

export default CommentForm
