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
	backgroundOverlayType: {
		type: 'string',
		default: 'color'
	},
	backgroundOverlayOpacity: {
		type: 'number',
		default: 50
	},
	backgroundOverlayColor: {
		type: 'string'
	},
	backgroundOverlayImageID: {
		type: 'number'
	},
	backgroundOverlayImageURL: {
		type: 'string'
	},
	backgroundOverlayAttachment: {
		type: 'string',
		default: 'scroll'
	},
	backgroundOverlayPosition: {
		type: 'string',
		default: 'top left'
	},
	backgroundOverlayRepeat: {
		type: 'string',
		default: 'repeat'
	},
	backgroundOverlaySize: {
		type: 'string',
		default: 'auto'
	},
	backgroundOverlayGradientType: {
		type: 'string',
		default: 'linear'
	},
	backgroundOverlayGradientAngle: {
		type: 'number',
		default: 90
	},
	backgroundOverlayGradientPosition: {
		type: 'string',
		default: 'center center'
	},
	backgroundOverlayGradientFirstColor: {
		type: 'string',
		default: '#36d1dc'
	},
	backgroundOverlayGradientFirstLocation: {
		type: 'number',
		default: 0
	},
	backgroundOverlayGradientSecondColor: {
		type: 'string',
		default: '#5b86e5'
	},
	backgroundOverlayGradientSecondLocation: {
		type: 'number',
		default: 100
	},
	columns: {
		type: 'number'
	},
	layout: {
		type: 'string'
	},
	layoutTablet: {
		type: 'string',
		default: 'equal'
	},
	layoutMobile: {
		type: 'string',
		default: 'equal'
	},
	hide: {
		type: 'boolean',
		default: false
	},
	hideTablet: {
		type: 'boolean',
		default: false
	},
	hideMobile: {
		type: 'boolean',
		default: false
	},
}

export default sectionBlockAttributes