import Layout from './../components/Layout'
import styles from './../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AuthContextProvider } from './../store/auth-context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default MyApp
