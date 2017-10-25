import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  pageName = 'about us';

  showElement = false;

  constructor(meta: Meta, title: Title) {

    title.setTitle('Google Developer Group | ' + this.pageName);

    meta.addTags([
      { name: 'keyword', content: 'This is ' + this.pageName }
    ]);

  }

  ngOnInit() {
  }

  toggleShow() {
    this.showElement = !this.showElement;
  }

}
