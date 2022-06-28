## Cards

Simple Angular application to display cards using bulma.io

Data is hard coded, array is not mapped in commented lines.

Array is mapped with ngFor in uncommented lines.

### Topics Covered

_Static files in Angular, scoped CSS Files, Angular components, Generate new components, Pass data to a component from parent to children, Host element selectors_

1. Adding images in Angular, from static resources -> Files put in assets folder (images, audio, js files).
2. To avoid global CSS styling we can use the component own css file, this way we only style the component and doesn't affect others -> app.component.css (in this case).
3. Each comp is designed to implement one thing, they can be reused, nested or shown inside each other. App is the most parent component. Each Comp has its own class, template, css and spec file.
4. Use Angular CLI to generate components with 'ng generate component < name >' or 'ng g c < name >'
5. Nest components by calling inside others with < app-compName></ app-compName>
6. Inside parent component, app in this case, we define a new property in the class, an array of objects. These property we will pass to the children. We need to import Input from angular Core and use @Input decorator to tell children component it will be receiving that data then we use either data binding or interpolation in the children to tell it where to display it.

6.1 Setting up Input Binding:
6.1.1 In parent template, find where we created children
6.1.2 Decide on the property name in parent to child
6.1.3 add binding to the child component, specifying data we want to pass
6.1.4 in Child class, add input property, this tells comp to expect parent to provide the value
6.1.5 in child's template, reference the input property.

7. to loop through the array instead we can use \*ngFor and do the same as the previous step.

8. Should we want to select the app root and style it with CSS we can do it in the styles.css file located in the main src folder by selecting it with app-root. We can also use :host selector inside the css file of the same component/appComp.
