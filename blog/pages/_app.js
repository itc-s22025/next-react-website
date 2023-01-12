import 'styles/globals.css'
import Layout from 'components/layout'

/*export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/

// Font Awsome の設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const MyApp = ({ Component, pageProps}) =>{
	return(
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
