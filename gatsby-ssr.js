/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react')
const fs = require('fs')

exports.onRenderBody = ({ setHeadComponents }) => {
  const files = getFilesFromPath('./public/static', '.woff2')
  const preload = ['Inter-Regular', 'Inter-Bold']

  setHeadComponents([
    files.map(file => {
      return preload.map((font, key) => {
        const fileBeginning = file
          .split('-')
          .slice(0, -1)
          .join('-')
        if (fileBeginning === font) {
          return (
            <link
              key={key}
              rel="preload"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
              href={`/static/${file}`}
            />
          )
        }
      })
    }),
  ])
}

function getFilesFromPath(path, extension) {
  let dir = fs.readdirSync(path)
  return dir.filter(elm => elm.match(new RegExp(`.*.(${extension})`, 'ig')))
}
