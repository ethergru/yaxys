const config = require("config");

module.exports = {
  constants: {
  },

  init() {
    module.exports.constants.schemas = _.reduce(yaxys.models, (memo, model, key) => {
      if (model.schema) {
        memo[key] = model.schema;
      }
console.log(111, key, memo);
      return memo;
    }, {});
  }
};