import {cache, lock} from '..'
import { expect } from 'chai'

describe('Core Specs', () => {
  it('The core methods/properties get properly exported', () => {
    expect(lock).to.be.ok
    expect(cache).to.be.ok
  })

  /*
  it('We can lock a node text', () => {
    const div = document.createElement('div')
    div.innerHTML = '<h1>hello</h1>'

    const unlock = lock(div)

    div.innerHTML = '<h1>goodbye</h1>'

    expect(div.querySelector('h1').innerHTML).to.be.equal('hello')

    unlock()
  })
  */
})
