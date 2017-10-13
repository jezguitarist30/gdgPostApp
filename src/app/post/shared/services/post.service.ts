import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';

import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class PostService {

  constructor(private _http: Http) { }

  get(): Observable<Array<Post>> {
    return this._http.get(environment.api.jsonPlaceholder + '/posts')
      .retry(3)
      .map(res => res.json());
  }

  getComments(postId: number): Observable<Array<Comment>> {
    return this._http.get(environment.api.jsonPlaceholder + '/comments?postId=' + postId)
      .retry(3)
      .map(res => res.json());
  }

}
