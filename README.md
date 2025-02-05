# ui-testing-library

## Development usage

To deploy the modifications locally while developing you need a shop installed locally,
you can replace the tests UI library tools by running this command:

```shell
 MAKECMDGOALS=/path/to/my/shop make test
```

This will override the UI testing library, you can then rerun the UI test campaign to check your modifications.
