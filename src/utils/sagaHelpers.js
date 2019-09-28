import { fork, call, take } from 'redux-saga/effects'

/**
 *
 * @param {String or Object} patternOrChannel
 * @param {*} saga
 * @param  {...any} args
 *
 * A custom redux saga effect to allow only one action per cycle.
 * Useful in scenarios where user can click a button multiple times but
 * the UI need to wait for a server response.
 */
export const takeFirst = (patternOrChannel, saga, ...args) => fork(function * () {
  while (true) {
    const action = yield take(patternOrChannel)
    yield call(saga, ...args.concat(action))
  }
})
