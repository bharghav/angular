import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: `register.component.html`,
  styles: [`input.ng-invalid{ border-left:5px solid red;}
            input.ng-valid{ border-left:5px solid green}
            textarea.ng-valid{ border-left:5px solid green}`]
})
export class RegisterComponent  {



  constructor(meta: Meta, title: Title) {

    title.setTitle('Register Page');
    meta.addTags([
      {
        name: 'author', content: 'Register Page Content'
      },
      {
        name: 'keywords', content: 'Register Page keywords'
      },
      {
        name: 'description', content: 'Register Page description'
      }

    ]);
  }

  onSubmit(value: any) {
    console.log(value);
  }
 }
