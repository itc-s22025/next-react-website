import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = () =>{
	return(
		<nav>
			<ul className={styles.list}>
				<li>
					<Link href="/" passHref legacyBehavior> 
						<a>HOME</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				
			</ul>
		</nav>
	)
}

export default Nav
