/**
 * Background type control
 * 
 * Usage :
 * <BackgroundTypeControl
 * 		label={ __( 'Background Type' ) }
 * 		backgroundType={ backgroundType }
 * 		changeBackgroundType={ changeBackgroundType }
 * />
 */

import classnames from 'classnames'
import './editor.scss'
import { barcodeIcon } from './icons.js'

const { __ } = wp.i18n
const { withInstanceId } = wp.compose
const {	Button,	ButtonGroup, Icon, IconButton, Tooltip } = wp.components;

const BackgroundTypeControl = ( {instanceId, label, backgroundType, changeBackgroundType} ) => {

	const id = `inspector-control-${ instanceId }`

	return (
		<div id={ id } className="components-base-control amply-blocks-background-type-control">
			<div className="components-base-control__field">
				<div className="components-base-control__title">
					<label className="components-base-control__label">{ label }</label>
					<ButtonGroup className="linking-controls">
						<IconButton
							icon={ 'admin-customizer' }
							label={ __( 'Color' ) }
							className={ classnames(
								'is-button',
								{ 'is-primary': 'color' === backgroundType }
							)}
							onClick={ () => {
								changeBackgroundType( 'color' );
							}}
						/>
						<IconButton
							icon={ 'format-image' }
							label={ __( 'Image' ) }
							className={ classnames(
								'is-button',
								{ 'is-primary': 'image' === backgroundType }
							)}
							onClick={ () => {
								changeBackgroundType( 'image' );
							}}
						/>
						<Tooltip text={ __( 'Gradient' ) } >
							<Button
								label={ __( 'Gradient' ) }
								className={ classnames(
									'is-button',
									{ 'is-primary': 'gradient' === backgroundType }
								)}
								onClick={ () => {
									changeBackgroundType( 'gradient' );
								}}
							>
								<Icon icon={ barcodeIcon } />
							</Button>
						</Tooltip>
					</ButtonGroup>
				</div>
			</div>
		</div>
	)

}

export default withInstanceId( BackgroundTypeControl )