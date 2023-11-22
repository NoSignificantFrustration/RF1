import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Review } from 'src/app/shared/models/Review';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment: Review | null = null;



}
