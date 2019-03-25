/**
 * Attributes
 */

const sectionBlockAttributes = {
	id: {
		type: 'string',
	},
	backgroundType: {
		type: 'string',
		default: 'color'
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundImageID: {
		type: 'number'
	},
	backgroundImageURL: {
		type: 'string'
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll'
	},
	backgroundPosition: {
		type: 'string',
		default: 'top left'
	},
	backgroundRepeat: {
		type: 'string',
		default: 'repeat'
	},
	backgroundSize: {
		type: 'string',
		default: 'auto'
	},
	backgroundGradientType: {
		type: 'string',
		default: 'linear'
	},
	backgroundGradientAngle: {
		type: 'number',
		default: 90
	},
	backgroundGradientPosition: {
		type: 'string',
		default: 'center center'
	},
	backgroundGradientFirstColor: {
		type: 'string',
		default: '#36d1dc'
	},
	backgroundGradientFirstLocation: {
		type: 'number',
		default: 0
	},
	backgroundGradientSecondColor: {
		type: 'string',
		default: '#5b86e5'
	},
	backgroundGradientSecondLocation: {
		type: 'number',
		default: 100
	},
}

export default sectionBlockAttributes