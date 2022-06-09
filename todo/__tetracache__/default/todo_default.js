import to_do_item from "../../components.py__to_do_item.js";

(() => {
  let __script = {};
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/default/to_do_list/_refresh"]}, {"name": "add_todo", "endpoint": ["/tetra/todo/default/to_do_list/add_todo"]}];
  let __serverProperties = ["key", "title"];
  let __componentName = 'todo__default__to_do_list';
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
  let __script = to_do_item;
  let __serverMethods = [{"name": "_refresh", "endpoint": ["/tetra/todo/default/to_do_item/_refresh"]}, {"name": "save", "watch": ["title", "done"], "debounce": 200, "debounce_immediate": false, "endpoint": ["/tetra/todo/default/to_do_item/save"]}, {"name": "delete_item", "endpoint": ["/tetra/todo/default/to_do_item/delete_item"]}];
  let __serverProperties = ["key", "title", "done"];
  let __componentName = 'todo__default__to_do_item';
  window.document.addEventListener('alpine:init', () => {
    Tetra.makeAlpineComponent(
      __componentName,
      __script,
      __serverMethods,
      __serverProperties,
    )
  })
})();