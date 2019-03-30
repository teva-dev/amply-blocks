/**
 * Block dependencies
 */

import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {	Placeholder, Tooltip, Button, SVG, Path } = wp.components;

class Inboarding extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		return (
			<Placeholder label={ __( 'Select Layout' ) } className="amply-inboarding-component">

				<div className="amply-layout-picker">
					
				<Tooltip text={ __( '1 column' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 1, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M100,0V50H0V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={ __( '2 columns' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 2, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M49,0V50H0V0Z M100,0V50H51V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={ __( '3 columns' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 3, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M32,0V50H0V0Z M66,0V50H34V0Z M100,0V50H68V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={ __( '4 columns' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 4, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={ __( '5 columns' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 5, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				<Tooltip text={ __( '6 columns' ) }>
					<Button
						className="amply-blocks-section-column-layout"
						onClick={ () => this.props.setupColumns( 6, 'equal' ) }
					>
						<SVG viewBox="0 0 100 50" xmlns="http://www.w3.org/1999/xlink">
							<Path d="M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z"></Path>
						</SVG>
					</Button>
				</Tooltip>

				</div>

			</Placeholder>
		);
	}
}

export default Inboarding;
