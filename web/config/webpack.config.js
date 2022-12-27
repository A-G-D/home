/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  const rules = [
    {
      test: /\.glsl/,
      type: 'asset/source',
    },
  ]

  rules.forEach((value) => config.module.rules.push(value))

  config.devServer.allowedHosts = ['localhost', 'resume.localhost']

  return config
}
