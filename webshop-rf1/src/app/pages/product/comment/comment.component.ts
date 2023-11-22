import { Component, ElementRef, Input } from '@angular/core';
import { Review } from 'src/app/shared/models/Review';
import { User } from 'src/app/shared/models/User';
import { ReviewService } from 'src/app/shared/services/review.service.ts.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment: Review | null = null;
  public username:string = "Ismeretlen felhasználó";
  public isAdmin:boolean;

  constructor( private userService:UserService,
    private host: ElementRef<HTMLElement>,
    private reviewService:ReviewService
    ){
    let user:User | undefined = undefined;
    if(this.comment?.customerId){
      userService.getUserById(this.comment?.customerId).subscribe(result => user = result)
      if(user){
        //this.username = user.username;
      }
    }

    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    
    
  }

  deleteComment():void{
    if (this.comment) {
      this.reviewService.deleteReview(this.comment.id);
    }
    

    //this.host.nativeElement.remove();
  }


}
