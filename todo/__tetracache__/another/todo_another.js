

(() => {
  let __script = {};
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/another/reactive_search/_refresh"]}, {"name": "watch_query", "watch": ["query"], "throttle": 200, "throttle_trailing": true, "throttle_leading": false, "endpoint": ["/tetra/todo/another/reactive_search/watch_query"]}];
  let __serverProperties = ["key", "query"];
  let __componentName = 'todo__another__reactive_search';
  window.document.addEventListener('alpine:init', () => {
    Tetra.makeAlpineComponent(
      __componentName,
      __script,
      __serverMethods,
      __serverProperties,
    )
  })
})();