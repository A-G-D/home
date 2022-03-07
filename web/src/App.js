import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

let mouseX
let mouseY

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

shaderWebBackground.shade({
  onInit: (context) => {
    mouseX = context.cssWidth / 2
    mouseY = context.cssHeight / 2
    context.iFrame = 0
  },
  onResize: (width, height, context) => {
    context.iMinDimension = Math.min(width, height)
  },
  onBeforeFrame: (context) => {
    context.shaderMouseX = context.toShaderX(mouseX)
    context.shaderMouseY = context.toShaderY(mouseY)
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
        iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
        iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
      },
    },
  },
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate='%PageTitle | %AppTitle'>
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
