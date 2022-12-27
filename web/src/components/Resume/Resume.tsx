import { FC } from 'react'
import ResumeWrapper, {
  ResumeWrapperProps,
} from 'src/components/base/ResumeWrapper'

export interface ResumeProps extends ResumeWrapperProps {}

const Resume: FC<ResumeProps> = ({ title, ...props }) => {
  const scale = window.devicePixelRatio

  return (
    <ResumeWrapper title={title ?? 'resume.pdf'} {...props}>
      <iframe
        title={title ?? 'resume.pdf'}
        src='https://drive.google.com/file/d/1L1KcofeMWaRl7QzFn7I2Z9m03KcpsruT/preview'
        width={(210 * 4) / scale}
        height={(297 * 4) / scale}
      />
    </ResumeWrapper>
  )
}

export default Resume
