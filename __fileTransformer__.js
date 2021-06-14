const { createHash } = require('crypto');

const tsJest = require('ts-jest');

const tsJestTransformer = tsJest.default.createTransformer();

module.exports = {
  getCacheKey(fileData, filename, ...rest) {
    const tsJestCacheKey = tsJestTransformer.getCacheKey(fileData, filename, ...rest);

    return createHash('md5')
      .update(tsJestCacheKey)
      .update('my custom cache key thing1')
      .digest('hex');
  },
  process(src, filename, config, options) {
    const transformOne = `
import { jsx } from '@emotion/react';
import React from 'react';

${src}`;
    const transformTwo = tsJestTransformer.process(transformOne, filename, config, options);

    return transformTwo;
  },
};
