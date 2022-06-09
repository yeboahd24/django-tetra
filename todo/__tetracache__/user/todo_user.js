

(() => {
  let __script = {};
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/user/create_user/_refresh"]}, {"name": "save", "watch": ["username", "password", "email"], "debounce": 200, "debounce_immediate": false, "endpoint": ["/tetra/todo/user/create_user/save"]}];
  let __serverProperties = ["key", "username", "password", "email"];
  let __componentName = 'todo__user__create_user';
  window.document.addEventListener('alpine:init', () => {
    Tetra.makeAlpineComponent(
      __componentName,
      __script,
      __serverMethods,
      __serverProperties,
    )
  })
})();
(() => {
  let __script = {};
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/user/login_user/_refresh"]}, {"name": "save", "watch": ["username", "password"], "debounce": 200, "debounce_immediate": false, "endpoint": ["/tetra/todo/user/login_user/save"]}];
  let __serverProperties = ["key", "username", "password"];
  let __componentName = 'todo__user__login_user';
  window.document.addEventListener('alpine:init', () => {
    Tetra.makeAlpineComponent(
      __componentName,
      __script,
      __serverMethods,
      __serverProperties,
    )
  })
})();
(() => {
  let __script = {};
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/user/user_list/_refresh"]}];
  let __serverProperties = ["key"];
  let __componentName = 'todo__user__user_list';
  window.document.addEventListener('alpine:init', () => {
    Tetra.makeAlpineComponent(
      __componentName,
      __script,
      __serverMethods,
      __serverProperties,
    )
  })
})();