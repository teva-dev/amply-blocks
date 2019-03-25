/**
 * Edit
 */

import classnames from 'classnames';
import BackgroundTypeControl from '../../components/background-type-control';
import ControlPanelControl from '../../components/control-panel-control';

const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls, ColorPalette, MediaPlaceholder } = wp.editor
const { Fragment } = wp.element
const { PanelBody, Button, Dashicon, SelectControl } = wp.components

const SectionBlockEdit = ({
	props,
	tab,
	setState,
	sectionBlock,
	updateBlockAttributes
}) => {

	const {
		id,
		backgroundType,
		backgroundColor,
		backgroundImageID,
		backgroundImageURL,
		backgroundAttachment,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
	} = props.attributes

	if ( undefined === id || id.substr( id.length - 8 ) !== props.clientId.substr( 0, 8 ) ) {
		const blockInstanceId = `wp-block-themeisle-blocks-advanced-columns-${ props.clientId.substr( 0, 8 ) }`;
		props.setAttributes({ id: blockInstanceId });
	}

	let background

	if ( 'color' === backgroundType ) {
		background = {
			background: backgroundColor
		};
	}

	if ( 'image' === backgroundType ) {
		background = {
			backgroundImage: `url( '${ backgroundImageURL }' )`,
			backgroundAttachment,
			backgroundPosition,
			backgroundRepeat,
			backgroundSize
		};
	}

	const style = {
		...background
	};

	const classes = classnames(
		props.className
	);

	const changeBackgroundType = value => {
		props.setAttributes({ backgroundType: value });
	};

	const changeBackgroundColor = value => {
		props.setAttributes({ backgroundColor: value });
	};

	const changeBackgroundImage = value => {
		props.setAttributes({
			backgroundImageID: value.id,
			backgroundImageURL: value.url
		});
	};

	const removeBackgroundImage = () => {
		props.setAttributes({
			backgroundImageID: '',
			backgroundImageURL: ''
		});
	};

	const changeBackgroundAttachment = value => {
		props.setAttributes({ backgroundAttachment: value });
	};

	const changeBackgroundPosition = value => {
		props.setAttributes({ backgroundPosition: value });
	};

	const changeBackgroundRepeat = value => {
		props.setAttributes({ backgroundRepeat: value });
	};

	const changeBackgroundSize = value => {
		props.setAttributes({ backgroundSize: value });
	};

	return (

		<Fragment>

			<InspectorControls>

				<PanelBody className="amply-blocks-inspector-header-tabs">
					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'layout' === tab }
						)}
						onClick={ () => setState({ tab: 'layout' }) }
					>
						<span>
							<Dashicon icon="editor-table"/>
							{ __( 'Layout' ) }
						</span>
					</Button>

					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'style' === tab }
						)}
						onClick={ () => setState({ tab: 'style' }) }
					>
						<span>
							<Dashicon icon="admin-customizer"/>
							{ __( 'Style' ) }
						</span>
					</Button>

					<Button
						className={ classnames(
							'header-tab',
							{ 'is-selected': 'advanced' === tab }
						)}
						onClick={ () => setState({ tab: 'advanced' }) }
					>
						<span>
							<Dashicon icon="admin-generic"/>
							{ __( 'Advanced' ) }
						</span>
					</Button>
				</PanelBody>

				{ 'layout' === tab && (

					<Fragment>
						<h1>tab = Layout</h1>
					</Fragment>
				) || 'style' === tab && (

					<Fragment>
						
						<PanelBody
							title={ __( 'Background Settings' ) }
						>

							<BackgroundTypeControl
								label={ __( 'Background Type' ) }
								backgroundType={ backgroundType }
								changeBackgroundType={ changeBackgroundType }
							/>

							{ 'color' === backgroundType && (

								<Fragment>
									<p>{ __( 'Background Color' ) }</p>
									<ColorPalette
										label={ 'Background Color' }
										value={ backgroundColor }
										onChange={ changeBackgroundColor }
									/>
								</Fragment>

							) || 'image' === backgroundType && (

								backgroundImageURL ?

									<Fragment>
										<div className="image-container">
											<div
												className="image-holder"
												style={ {
													backgroundImage: `url('${ backgroundImageURL }')`
												} }
											>
											</div>
											<div
												className="image-delete"
												onClick={ removeBackgroundImage }
											>
												<Dashicon icon="trash" />
												<span>{ __( 'Remove Image' ) }</span>
											</div>
										</div>

										<Button
											isDefault
											className="image-delete-button"
											onClick={ removeBackgroundImage }
										>
											{ __( 'Change or Remove Image' ) }
										</Button>

										<ControlPanelControl
											label={ 'Background Settings' }
										>
											<SelectControl
												label={ __( 'Background Attachment' ) }
												value={ backgroundAttachment }
												options={ [
													{ label: 'Scroll', value: 'scroll' },
													{ label: 'Fixed', value: 'fixed' },
													{ label: 'Local', value: 'local' }
												] }
												onChange={ changeBackgroundAttachment }
											/>

											<SelectControl
												label={ __( 'Background Position' ) }
												value={ backgroundPosition }
												options={ [
													{ label: 'Default', value: 'top left' },
													{ label: 'Top Left', value: 'top left' },
													{ label: 'Top Center', value: 'top center' },
													{ label: 'Top Right', value: 'top right' },
													{ label: 'Center Left', value: 'center left' },
													{ label: 'Center Center', value: 'center center' },
													{ label: 'Center Right', value: 'center right' },
													{ label: 'Bottom Left', value: 'bottom left' },
													{ label: 'Bottom Center', value: 'bottom center' },
													{ label: 'Bottom Right', value: 'bottom right' }
												] }
												onChange={ changeBackgroundPosition }
											/>

											<SelectControl
												label={ __( 'Background Repeat' ) }
												value={ backgroundRepeat }
												options={ [
													{ label: 'Repeat', value: 'repeat' },
													{ label: 'No-repeat', value: 'no-repeat' }
												] }
												onChange={ changeBackgroundRepeat }
											/>

											<SelectControl
												label={ __( 'Background Size' ) }
												value={ backgroundSize }
												options={ [
													{ label: 'Auto', value: 'auto' },
													{ label: 'Cover', value: 'cover' },
													{ label: 'Contain', value: 'contain' }
												] }
												onChange={ changeBackgroundSize }
											/>

										</ControlPanelControl>
									</Fragment>
									:
									<Fragment>
										<MediaPlaceholder
											icon="format-image"
											labels={ {
												title: __( 'Background Image' ),
												name: __( 'an image' )
											} }
											value={ backgroundImageID }
											onSelect={ changeBackgroundImage }
											accept="image/*"
											allowedTypes={ [ 'image' ] }
										/>
									</Fragment>

							) || 'gradient' === backgroundType && (

								<Fragment>
									<p>{ __( 'First Color' ) }</p>
								</Fragment>

							)}

						</PanelBody>

					</Fragment>

				) || 'advanced' === tab && (

					<Fragment>
						<h1>tab = advanced</h1>
					</Fragment>

				)}

			</InspectorControls>

			<div className={ classes } style={ style }>

				<div className="innerblocks-wrap">

					<InnerBlocks />

				</div>

			</div>

		</Fragment>

	)

}

export default SectionBlockEdit
