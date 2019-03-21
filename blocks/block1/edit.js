/**
 * Edit
 */

const { InnerBlocks } = wp.editor
const { Fragment } = wp.element

const SectionBlockEdit = ({props}) => {

	const {backgroundColor} = props.attributes

	return (

		<Fragment>

			<div>

				<div className="innerblocks-wrap">

					<InnerBlocks />

				</div>

			</div>

		</Fragment>

	)

}

export default SectionBlockEdit
