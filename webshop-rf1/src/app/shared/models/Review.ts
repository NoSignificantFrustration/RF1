export interface Review{
    ID: number;
    UserID: number;
    ProductID: number;
    Points: number;
    Comment: string;

    /*constructor(UserID: number, ProductID: number, Points: number, Comment: string){
        this.UserID = UserID;
        this.ProductID = ProductID;
        this.Points = Points;
        this.Comment = Comment;
    }*/

}