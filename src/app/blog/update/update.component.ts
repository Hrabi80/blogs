import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogServiceService } from 'src/app/blog-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateBlogForm!: FormGroup;
  id:any;
  constructor(private service : BlogServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.updateBlogForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl('')
  });
  }
  onSubmit() {
    console.log(this.updateBlogForm.value);
    // send data to the server
}
}
