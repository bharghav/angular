import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: `about.component.html`,
})
export class AboutComponent  {

  constructor(meta: Meta, title: Title) {

    title.setTitle('About  Page');
    meta.addTags([
      {
        name: 'author', content: 'About Page Content'
      },
      {
        name: 'keywords', content: 'About Page keywords'
      },
      {
        name: 'description', content: 'About Page description'
      }

    ]);
  }

 }
