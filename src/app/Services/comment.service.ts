import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Comment } from '../models/comment.model';
@Injectable({
  providedIn: "root"
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = "https://historyacoreapi20210430165528.azurewebsites.net/api/comments";
  loading: boolean;
  addComment(comment: Comment) {
    this.loading = true;
    return this.httpClient.post(this.apiUrl, comment).pipe(
      tap(x => {
        this.loading = false;
      })
    );
  }

  commentList(id: number) {
    return this.httpClient.get<Comment[]>(`${this.apiUrl}/${id}`);
  }
}
