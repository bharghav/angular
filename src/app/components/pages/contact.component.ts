import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: `contact.component.html`,
})
export class ContactComponent  {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Contact Page');
    meta.addTags([
      {
        name: 'author', content: 'Contact Page Content'
      },
      {
        name: 'keywords', content: 'Contact Page keywords'
      },
      {
        name: 'description', content: 'Contact Page description'
      }

    ]);
  }
 }
