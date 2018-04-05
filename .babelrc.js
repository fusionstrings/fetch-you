module.exports = {
	"presets": [["@fusionstrings/fusionstrings", {modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false}]]
}