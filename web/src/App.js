import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import BackgroundShader from './background.glsl'

import './scaffold.css'
import './index.css'

const RESOLUTION_FACTOR = 1 / 2

let mouseX
let mouseY

const shaderScriptElement = document.querySelector('#background')
shaderScriptElement.innerHTML = BackgroundShader

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

shaderWebBackground.shade({
  onInit: (context) => {
    mouseX = (context.cssWidth / 2) * RESOLUTION_FACTOR
    mouseY = (context.cssHeight / 2) * RESOLUTION_FACTOR
    context.iFrame = 0
  },
  onResize: (width, height, context) => {
    context.canvas.width = width * RESOLUTION_FACTOR
    context.canvas.height = height * RESOLUTION_FACTOR
    context.iMinDimension = Math.min(width, height)
  },
  onBeforeFrame: (context) => {
    context.shaderMouseX = context.toShaderX(mouseX * RESOLUTION_FACTOR)
    context.shaderMouseY = context.toShaderY(mouseY * RESOLUTION_FACTOR)
  },
  onAfterFrame: (context) => {
    context.iFrame++
  },
  onError: (error, canvas) => {
    canvas.remove()
    console.error(error)
    document.documentElement.classList.add('shader-web-background-fallback')
  },
  shaders: {
    background: {
      uniforms: {
        iResolutionFactor: (gl, loc) => gl.uniform1f(loc, RESOLUTION_FACTOR),
        iResolution: (gl, loc, context) =>
          gl.uniform2f(loc, context.canvas.width, context.canvas.height),
        iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
        iMouse: (gl, loc, context) =>
          gl.uniform2f(loc, context.shaderMouseX, context.shaderMouseY),
      },
    },
  },
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate='%PageTitle | %AppTitle'>
      <AuthProvider type='dbAuth'>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
