import { useState, useRef } from 'react'
import s from 'styles/accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({ heading, children }) =>{
	const [textIsOpen, setTextIsOpen ] = useState(false)

	const toggleText = () => {
		setTextIsOpen((prev) => !prev)
	}

	const refText = useRef(null)

	return(
		<div className={textIsOpen ? s.open: s.close }>
			<h3 className={s.heading}>
				<button onClick={toggleText}>
					{heading}
					<FontAwesomeIcon icon={faCircleChevronDown} className={s.icon} />
				</button>
			</h3>
			<div className={s.text} ref={refText}
			style={{'--text-height': refText.current
				? `${refText.current.scrollHeight}px`
				: '0px',
			}}>
				<div className={s.textInner}>{children}</div>
			</div>
		</div>
	)

}

export default Accordion
