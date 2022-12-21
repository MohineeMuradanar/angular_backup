import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;
  // abcd:FormGroup;
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    // this.bookForm = this.formBuilder.group({
    //   name: [''],
    //   price: [''],
    //   description: ['']
    // })
    this.bookForm = new FormGroup({
      name:  new FormControl('',[Validators.required,Validators.minLength(4)]),
      price:  new FormControl('',[Validators.required]),
      description:  new FormControl('',[Validators.required])
    })
    
  }

  ngOnInit(): void { }
  // onSubmit(): any {
  //   this.crudService.AddBook(this.bookForm.value)
  //     .subscribe(() => {
  //       console.log('Data added successfully!');
  //       this.ngZone.run(() => {
  //         this.router.navigateByUrl('/books-list')
  //       }), (err: any) => {
  //         console.log(err);

  //       }

  //     })
  // }

  onSubmit(): any {
    console.log(this.bookForm.getRawValue());
    
    this.crudService.AddBook(this.bookForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
      });
  }


}



