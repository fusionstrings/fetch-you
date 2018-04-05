module.exports = {
	"presets": [["@fusionstrings/fusionstrings", {modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false}]],
	"plugins": process.env.NODE_ENV === 'test' ? [] : ["@babel/plugin-external-helpers"]
}