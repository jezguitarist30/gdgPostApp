import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(meta: Meta, title: Title) {

    title.setTitle('Google Developer Group | Home');

    meta.addTags([
      { name: 'keyword', content: 'This is home' }
    ]);

  }

}
