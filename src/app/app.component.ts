import { Component } from '@angular/core';


/**
 * @selector app-root is root-component of the application
 * @templateUrl is the html file of the component
 * @styleUrls is the css file of the component (aplies to the component only)
 * @standalone is a boolean property which is used to define whether the component is standalone or not.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is my first Angular App Through data binding';
}
