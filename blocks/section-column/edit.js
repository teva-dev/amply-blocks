/**
 * Edit
 */

import classnames from 'classnames';

const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.editor
const { Fragment } = wp.element
const { PanelBody } = wp.components

const SectionColumnBlockEdit = ({
	props,
	tab,
	setState,
	adjacentBlockClientId,
	adjacentBlock,
	parentClientId,
	parentBlock,
	updateBlockAttributes
}) => {

	const { className } = props.className

	const {
		id,
		columnWidth
	} = props.attributes

	if ( id === undefined || id.substr( id.length - 8 ) !== props.clientId.substr( 0, 8 ) ) {
		const instanceId = `amply-blocks-section-column-${ props.clientId.substr( 0, 8 ) }`;
		props.setAttributes({ id: instanceId });
	}

	const style = {};

	return (

		<Fragment>

			<div id={ id } className={ className } style={ style }>
				<InnerBlocks templateLock={ false } />
			</div>

		</Fragment>

	)

}

export default SectionColumnBlockEdit
