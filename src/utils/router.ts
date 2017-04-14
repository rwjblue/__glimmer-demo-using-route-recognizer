import RouteRecognizer from 'route-recognizer';

let router = new RouteRecognizer();

router.map(function(match) {
  match('/posts').to('post-route');
  match('/about').to('about-route');
  match('/').to('index-route');
});

export function getHash(location) {
  let href = location.href;
  let hashIndex = href.indexOf('#');

  if (hashIndex === -1) {
    return '/';
  } else {
    return href.substr(hashIndex + 1);
  }
}

let changeCallback, lastPath;
function _hashchangeHandler() {
  let path = getHash(window.location);

  if (path === lastPath) { return; }

  lastPath = path;

  let matches = router.recognize(path);

  changeCallback(matches[0].handler, matches[0].params);
}

export function onChange(callback: Function) {
  changeCallback = callback;

  _hashchangeHandler(); // kick it off the first time
  window.addEventListener('hashchange', _hashchangeHandler);
}

export default router;
