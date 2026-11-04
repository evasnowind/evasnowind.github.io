'use strict';

const fs = require('node:fs');
const path = require('node:path');

// Keep the custom layout outside the npm-managed NexT theme.
hexo.extend.filter.register('before_generate', function () {
  const layout = path.join(this.base_dir, 'layouts/timeline.njk');
  this.theme.setView('timeline.njk', fs.readFileSync(layout, 'utf8'));
});
