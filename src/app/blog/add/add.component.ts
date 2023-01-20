import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addBlogForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl('')
  });
  }

  onSubmit() {
    console.log(this.addBlogForm.value);
    // send data to the server
}

}
