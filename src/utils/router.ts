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

export function recognize() {
  let hash = getHash(window.location);

  return router.recognize(hash);
}

export default router;
