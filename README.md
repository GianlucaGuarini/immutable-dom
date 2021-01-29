# immutable-dom

Lock any HTML DOM Element 🔐
This script detects attempts to modify your HTML structure and content. 
It disables changes from internal or external sources (like Devtools).

## Motivation

Your Application HTML can be [modified by scammers](https://www.youtube.com/watch?v=R1etkjUN6Ak) or third party scripts.
I wanted to create simple script that locks safely your application HTML making it immutable.

## Installation

```bash
npm i immutable-dom
```

## Usage

```js
import {lock} from 'immutable-dom'

// your application html can be no longer modified
const unlock = lock(document.getElementById('app'))

// unlock your application
unlock()
```

## TODO

- [] Add unit test
