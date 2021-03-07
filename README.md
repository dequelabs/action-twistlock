# action-twistlock

> A GitHub action for scanning a Docker image with the [Twistlock `twistcli` tool](https://docs.paloaltonetworks.com/prisma/prisma-cloud/19-11/prisma-cloud-compute-edition-admin/tools/twistcli.html).

## Example Usage

A simple example of building a Docker image and scanning it with Twistlock.

```yaml
name: Build and scan image

on: [push]

jobs:
  build_and_scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      # Build the image we're going to scan.
      - run: docker build -t myapp:test ./test

      # Run the Twistlock action.
      - uses: dequelabs/action-twistlock@main
        with:
          tl-username: ${{ secrets.TWISTLOCK_USERNAME }}
          tl-password: ${{ secrets.TWISTLOCK_PASSWORD }}
          tl-console-url: https://harbor.dequelabs.com
          docker-image: myapp:test
```

## Configuration

The action accepts the following inputs:

- `tl-username` (_required_): The username to access the Twistlock console.
- `tl-password` (_required_): The password the the user specified by `tl-username`.
- `tl-console-url` (_required_): The complete URI for the Twistlock console, including protocol and port. For example, _https://console.mycompany.org:8083_.
- `tl-cli-version`: The version of the Twistlock CLI. Defaults to _v1_.
- `docker-image` (_required_): The docker image to scan.

## License

**MPL 2.0**

Copyright (c) Deque Systems, Inc
