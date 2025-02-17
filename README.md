# Angular ??


### Angular Commands

```shell
    ng new <<project_name>>
    ng serve # start the project
    ng generate component component name 
    ng g c component name # other way to create components
    ng g m module_name
```

If you have decided to go with a version over `16` you will have to **add** the ``no-standalone`` in the project creation command: `ng new app --no-standalone`

**Data Binding**: data binding is the process of comunicate ts classes with html templates through `{{ variableName }}` to show it in our UI.

### NG CLI 

* **`ng g c component_name`**: generates a components, here it's important to keep in mind the flag to associate a component with a module, flag `--module=module_name`
* **`ng g m module_name`**: generate a module
* **`ng new project_name`**: generate a new angular project
* **`ng serve`**: run our angular project


## Angular Directives

### *ngFor
It's used to loop over an array of elements in  our html:
```html
<ul>
    <li *ngFor="element in Elements"></li>
</ul>
```