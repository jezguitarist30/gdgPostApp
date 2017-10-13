import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Modules
import { PostRoutingModule } from './post-routing.module';

// Components
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';

// Services
import { PostService } from './shared/services/post.service';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PostRoutingModule
  ],
  declarations: [PostComponent, PostListComponent, CommentListComponent],
  providers: [PostService]
})
export class PostModule { }
