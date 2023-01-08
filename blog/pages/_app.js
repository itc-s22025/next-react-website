import 'styles/globals.css'
import Layout from 'components/layout'

/*export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/

const MyApp = ({ Component, pageProps}) =>{
	return(
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
