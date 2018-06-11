'use strict';

module.exports = {
  name: 'ember-cli-deploy-latest-revision',

  createDeployPlugin: function(options) {
    return {
      name: options.name,

      willActivate: function(context) {
        if (context.commandOptions.revision !== 'LATEST') {
          return;
        }

        let allRevisions = context.initialRevisions;
        let latestRevision = allRevisions[0];

        if (latestRevision) {
          context.commandOptions.revision = latestRevision.revision;
        }
      }
    };
  }
};
