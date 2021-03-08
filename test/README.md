# test app

An example [Node.js app](./app.js) which we build and scan using Twistlock.

We expect to see a number of _high_ security issues when scanning the built image, including:

| CVE            | Package |
| -------------- | ------- |
| CVE-2020-8265  | node    |
| CVE-2021-23841 | openssl |
| CVE-2021-23840 | openssl |
