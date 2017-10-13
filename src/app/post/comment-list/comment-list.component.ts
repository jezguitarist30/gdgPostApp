import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../shared/services/post.service';

import { Comment } from '../shared/models/comment.model';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId: number;

  comments: Observable<Array<Comment>>;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = this._postService.getComments(this.postId);
  }

  getImage(email: string) {
    return 'https://www.gravatar.com/avatar/' + Md5.hashStr(email);
  }
  
}
