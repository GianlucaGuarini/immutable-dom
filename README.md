# immutable-dom

Lock any HTML DOM Element 🔐

## Motivation

Your Application HTML can be [modified by scammers](https://www.youtube.com/watch?v=R1etkjUN6Ak) or third party scripts.
This simple script attempts to lock safely your application HTML making it immutable.

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
