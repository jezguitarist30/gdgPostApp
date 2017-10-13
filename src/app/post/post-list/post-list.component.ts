import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { PostService } from '../shared/services/post.service';

import { Post } from '../shared/models/post.model';
import { Comment } from '../shared/models/comment.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Array<Post>>;
  comments: Observable<Array<Comment>>;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.posts = this._postService.get();
  }
}
