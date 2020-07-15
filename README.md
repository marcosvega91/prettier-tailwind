<div align="center">
<img alt="Prettier"
  src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.png">
<img alt="Tailwind" height="180" hspace="25" vspace="15"
  src="https://i.pinimg.com/originals/61/f5/e0/61f5e0d554161a814ddc713d3ff9c3fe.png">
</div>

<h2 align="center">Prettier Tailwind Plugin</h2>

<p align="center">

  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>

## Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

This plugin adds support for the Tailwind CSS library.

### How it works

This plugin will sort tailwind classes as [headwind](https://github.com/heybourn/headwind) does and will also remove duplicates classes.

Actually the plugin works for `html` language and `jsx` language.

### Input

```html
<div class="mx-auto flex h-16 justify-between items-center max-w-6xl h-16">
  <p>Hello World</p>
</div>
```

### Output

```html
<div class="flex items-center justify-between h-16 max-w-6xl mx-auto">
  <p>Hello World</p>
</div>
```

## Install

N/A
