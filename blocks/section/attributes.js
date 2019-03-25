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
}

export default sectionBlockAttributes