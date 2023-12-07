import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Tags } from 'src/app/shared/models/Tags';
import { ProductService } from 'src/app/shared/services/product.service';
import { TagsService } from 'src/app/shared/services/tags.service';
import { NewTagDialogComponent } from './new-tag-dialog/new-tag-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  tags: Tags[] = [];
  //categories: Set<string> = new Set();

  constructor(
    private productService: ProductService,
    private tagsService: TagsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe((tags) => {
      this.tags = tags;
    });
  }

  deleteTag(tag: Tags) {
    //this.tagsService.deleteTagById(tag.tagId);
    //real id alapjánt tud csak törölni!
  }

  openNewTagDialog() {
    console.log('here');
    const dialogRef = this.dialog.open(NewTagDialogComponent);
  }
}
