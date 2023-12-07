import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Tags } from 'src/app/shared/models/Tags';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'app-new-tag-dialog',
  templateUrl: './new-tag-dialog.component.html',
  styleUrls: ['./new-tag-dialog.component.scss'],
})
export class NewTagDialogComponent implements OnInit {
  tagForm: FormGroup = this.fb.group(
    {
      tagId: ['12'],
      tagName: ['', Validators.required],
    },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private tagService: TagsService,
    @Inject(MAT_DIALOG_DATA)
    public dialogdata: {},
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const formData = this.tagForm.value as Tags;
    console.log(formData);
    if (this.tagForm.status == 'VALID') {
      console.log(this.tagForm);

      this.tagService.createTag(formData);
      this.dialog.closeAll();
    }
  }
}
