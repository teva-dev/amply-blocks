/**
 * Save
 */

const { InnerBlocks } = wp.editor

const sectionBlockSave = props => {

	const {
		id,
	} = props.attributes;

	const style = {};

	return (
		
		<div id={ id } className={ props.className } style={ style }>
				<InnerBlocks.Content />
		</div>

	)

}

export default sectionBlockSave