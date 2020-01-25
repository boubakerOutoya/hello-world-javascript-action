<p align="center">
  <a href="https://github.com/boubakerOutoya/hello-world-javascript-action"><img alt="typescript-action status" src="https://github.com/boubakerOutoya/hello-world-javascript-action/workflows/.github/workflows/main.yml/badge.svg"></a>
</p>

![](https://github.com/boubakerOutoya/hello-world-javascript-action/workflows/.github/workflows/main.yml/badge.svg")

https://github.com/boubakerOutoya/hello-world-javascript-action

# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
who-to-greet: 'Mona the Octocat'
