import s from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
	prevText='', prevUrl='',
	nextText='', nextUrl='',
}){
	return(
		<ul className={s.flexContainer}>
			{prevText && prevUrl && (
				<li className={s.prev}>
					<Link href={prevUrl}>
						<div className={s.iconText}>
							<FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
							<span>{prevText}</span>
						</div>
					</Link>
				</li>
			)}
			{nextText && nextUrl && (
				<li className={s.next}>
					<Link href={nextUrl}>
						<div className={s.iconText}>
							<span>{nextText}</span>
							<FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
						</div>
					</Link>
				</li>
)}
		</ul>
	)

}
