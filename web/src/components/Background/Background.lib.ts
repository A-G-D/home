/**
 * [license](glslCanvas-license.txt)
 */
import GlslCanvas from 'glslCanvas'

export class GLCanvas extends GlslCanvas {
  [x: string]: any
  resolutionFactor: number = 1

  constructor(canvas, contextOptions?: any, options?: any) {
    super(canvas, contextOptions, options)
  }

  resize() {
    if (
      this.width !== this.canvas.clientWidth ||
      this.height !== this.canvas.clientHeight
    ) {
      this.realToCSSPixels = window.devicePixelRatio || 1

      // Lookup the size the browser is displaying the canvas in CSS pixels
      // and compute a size needed to make our drawingbuffer match it in
      // device pixels.
      const displayWidth =
        Math.floor(this.gl.canvas.clientWidth * this.realToCSSPixels) *
        this.resolutionFactor
      const displayHeight =
        Math.floor(this.gl.canvas.clientHeight * this.realToCSSPixels) *
        this.resolutionFactor

      // Check if the canvas is not the same size.
      if (
        this.gl.canvas.width !== displayWidth ||
        this.gl.canvas.height !== displayHeight
      ) {
        // Make the canvas the same size
        this.gl.canvas.width = displayWidth
        this.gl.canvas.height = displayHeight
        // Set the viewport to match
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)
      }
      this.width = this.canvas.clientWidth
      this.height = this.canvas.clientHeight
      this.resizeSwappableBuffers()
      return true
    } else {
      return false
    }
  }

  setMouse(mouse) {
    const rect = this.canvas.getBoundingClientRect()
    if (
      mouse &&
      mouse.x &&
      mouse.x >= rect.left &&
      mouse.x <= rect.right &&
      mouse.y &&
      mouse.y >= rect.top &&
      mouse.y <= rect.bottom
    ) {
      const mouse_x =
        (mouse.x - rect.left) * this.realToCSSPixels * this.resolutionFactor
      const mouse_y =
        this.canvas.height -
        (mouse.y - rect.top) * this.realToCSSPixels * this.resolutionFactor

      this.uniform('2f', 'vec2', 'u_mouse', mouse_x, mouse_y)
    }
  }
}
