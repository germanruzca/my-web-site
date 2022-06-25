import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { ThemeProvider} from "styled-components";
import { theme } from '../styles/theme'
import '../styles/prism-gruvbox.css'
import { MDXProvider } from '@mdx-js/react'
import {MDXComponents} from "../components/MDXComponents";
import { Text } from '../components/elements'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
      </ThemeProvider>
  )
}

export default MyApp
