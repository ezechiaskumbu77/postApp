import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {
  //     title: 'First post', content: 'This is the first post\'s content'
  //   },
  //   {
  //     title: 'Secoond post', content: 'This is the second post\'s content'
  //   },
  //   {
  //     title: 'Third post', content: 'This is the third post\'s content'
  //   }
  // ]
  posts = [];
  constructor() { }

  ngOnInit(): void {
  }

}
