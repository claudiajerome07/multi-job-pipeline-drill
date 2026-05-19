const fs = require('fs');
const path = require('path');

describe('Integration Tests', () => {
  it('should verify that dist/api.js exists', () => {
    const distPath = path.join(__dirname, '../../dist/api.js');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build output not found.');
    }
    expect(fs.existsSync(distPath)).toBe(true);
  });
});
