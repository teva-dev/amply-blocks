/**
 * Section component
 */

import classnames from 'classnames'

const Section = ({
	className, // any custom class name can be passed
	children,  // any markup to be included within the section is passed (via the children prop)
	...props   // any additional props passed in will be interpreted as extra attributes for the section’s outer div
}) => {

	const wrapperClasses = classnames(
		'test-wrapper-class',
		className
	)

	const innerClasses = classnames(
		'test-innner-class'
	)

	return (
		<div className={wrapperClasses} {...props} >
			<div className={innerClasses}>
				{children}
			</div>
		</div>
	)
}

export default Section
