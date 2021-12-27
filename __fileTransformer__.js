const { createHash } = require('crypto');

const tsJest = require('ts-jest');

const tsJestTransformer = tsJest.default.createTransformer();

module.exports = {
  getCacheKey(fileData, filename, ...rest) {
    const tsJestCacheKey = tsJestTransformer.getCacheKey(fileData, filename, ...rest);

    return createHash('md5').update(tsJestCacheKey).digest('hex');
  },
  process(src, filename, config, options) {
    return tsJestTransformer.process(src, filename, config, options);
  },
};
