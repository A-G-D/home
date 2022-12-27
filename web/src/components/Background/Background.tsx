import { FC, HTMLAttributes, MutableRefObject, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { GLCanvas } from './Background.lib'
import BackgroundShader from 'src/background.glsl'

const backgroundFragShader = BackgroundShader

export interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  resolutionFactor?: number
}

const Background: FC<BackgroundProps> = ({
  resolutionFactor = 1,
  children,
  className,
  ...props
}) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>

  useEffect(() => {
    if (canvasRef.current == null) return

    const canvasWidth = canvasRef.current.clientWidth
    const canvasHeight = canvasRef.current.clientHeight

    canvasRef.current.width = canvasWidth * resolutionFactor
    canvasRef.current.height = canvasHeight * resolutionFactor

    const sandbox = new GLCanvas(canvasRef.current)
    sandbox.resolutionFactor = resolutionFactor
    sandbox.load(backgroundFragShader)
    sandbox.setUniform(
      'u_mouse',
      canvasRef.current.width / 2,
      canvasRef.current.height / 2
    )

    return () => sandbox.destroy()
  }, [])

  return (
    <div
      className={classNames(
        'relative h-full w-full flex flex-col items-stretch',
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className='fixed z-[-1] bg-cover bg-no-repeat h-full w-full flex-auto flex flex-row justify-center overflow-auto'
      />
      {children}
    </div>
  )
}

export default Background
