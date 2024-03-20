# hello-aiken

## Devcontainer configuration

Before you start using this repository with devcontainers and VSCode you should follow the next steps:

1. Open your terminal and get the group id and the user id

```sh
$ id -g
100

$ id -u
1000

```

2. Create the `.env` file in the folder `.devcontainer` with your MAESTRO_TOKEN, GROUP_ID and USER_ID as follows:

```sh
MAESTRO_TOKEN=<YOUR_MAESTRO_TOKEN>
GROUP_ID=100
USER_ID=1000
```

> [!IMPORTANT]  
> For the purpose of this repository, we are using an account from www.gomaestro.org where you can create an account and get your maestro token.

3. Open VSCode as always

```sh
code .
```
## Validators

Write validators in the `validators` folder, and supporting functions in the `lib` folder using `.ak` as a file extension.

For example, as `validators/always_true.ak`

```gleam
validator {
  fn spend(_datum: Data, _redeemer: Data, _context: Data) -> Bool {
    True
  }
}
```

## Building

```sh
aiken build
```

## Testing

You can write tests in any module using the `test` keyword. For example:

```gleam
test foo() {
  1 + 1 == 2
}
```

To run all tests, simply do:

```sh
aiken check
```

To run only tests matching the string `foo`, do:

```sh
aiken check -m foo
```

## Documentation

If you're writing a library, you might want to generate an HTML documentation for it.

Use:

```sh
aiken docs
```

## Resources

Find more on the [Aiken's user manual](https://aiken-lang.org).
