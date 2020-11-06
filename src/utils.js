const config = require('./config')

const getBaseUrl = (env = 'sandbox', path = 'default') => config[path][env]

module.exports = {
	getBaseUrl
}
