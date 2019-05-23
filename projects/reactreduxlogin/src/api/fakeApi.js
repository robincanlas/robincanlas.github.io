/**
 * Mocking client-server processing
 */
import _comics from './comics.json'

const TIMEOUT = 1000

export default {
  getComics: (cb, timeout) => setTimeout(() => cb(_comics), timeout || TIMEOUT),
  buyComics: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}