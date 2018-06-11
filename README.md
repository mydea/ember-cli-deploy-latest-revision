ember-cli-deploy-latest-revision
==============================================================================

Allow specifying the revision as `LATEST`.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-deploy-latest-revision
```


Usage
------------------------------------------------------------------------------

```
ember deploy:activate --revision=LATEST
```

This will basically load the revisions from the server, and set the most recent one. You can still manually specify a revision name - only if you specify `LATEST` will this addon take effect.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
