import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
})

export class HomeComponent  {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Home Page');
    meta.addTags([
      {
        name: 'author', content: 'home Page Content'
      },
      {
        name: 'keywords', content: 'home Page keywords'
      },
      {
        name: 'description', content: 'home Page description'
      }

    ]);
  }

 }
