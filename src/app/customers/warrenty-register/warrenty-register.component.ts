import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warrenty-register',
  templateUrl: './warrenty-register.component.html',
  styleUrls: ['./warrenty-register.component.scss']
})
export class WarrentyRegisterComponent {  

  constructor(private formBuilder: FormBuilder ,private http: HttpClient, private router:Router) {}

  exampleForm = this.formBuilder.group({

    firstName: ['', [Validators.required,Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]],
    date: ['', [Validators.required]],
    email:['',[Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    street:['', Validators.required],
    street2:['', Validators.required],
    city:['', Validators.required],
    zip:['', Validators.required],
    model:['', [Validators.required,Validators.pattern('^[0-9]+$')]],
    selectorControl:['', Validators.required],
    item:['', Validators.required]

  }); 
  
  // onKeyDown(event: KeyboardEvent) {
  //   const spaceKeyCode = 32;
  //   if (event.keyCode === spaceKeyCode) {
  //     event.preventDefault(); // Prevent space key from being entered
  //   }
  // }

  // onKeyDown(event: KeyboardEvent) {
  //   const spaceKeyCode = 32;
  //   if (event.keyCode === spaceKeyCode) {
  //     const inputText = (event.target as HTMLInputElement).value.trim(); // Cast target to HTMLInputElement and get input value
  //     const wordCount = inputText.split(' ').length; // Count number of words
  //     if (wordCount >= 2) {
  //       event.preventDefault(); // Prevent space key from being entered
  //     }
  //   }
  // }

 
  onKeyDown(event: KeyboardEvent) {
    const spaceKey = " ";
    if (event.key === spaceKey) {
      const inputText = (event.target as HTMLInputElement).value.trim(); // Cast target to HTMLInputElement and get input value
      if (inputText === '') {
        event.preventDefault(); // Prevent space key from being entered if input is empty
      } else {
        const wordCount = inputText.split(' ').length; // Count number of words
        if (wordCount >= 100) {
          event.preventDefault(); // Prevent space key from being entered if word count is already two or more
        }
      }
    }
  }

  // onKeyDown(event: KeyboardEvent) {
  //   const spaceKey = " ";
  //   if (event.key === spaceKey) {
  //     const inputText = (event.target as HTMLInputElement).value.trim(); // Cast target to HTMLInputElement and get input value
  //     const wordCount = inputText.split(' ').filter(word => word !== '').length; // Count number of non-empty words
  //     if (wordCount >= 2 && inputText.endsWith(' ')) {
  //       event.preventDefault(); // Prevent space key from being entered if word count is already two or more and the input ends with a space
  //     }
  //   }
  // }


  
  get user() { return this.exampleForm.get('firstName') }
  get user2(){ return this.exampleForm.get('firstName') }
  get date() { return this.exampleForm.get('date') }
  get email(){ return this.exampleForm.get('email') }
  get phone() { return this.exampleForm.get('phone') }
  get street() { return this.exampleForm.get('street') }
  get street2() { return this.exampleForm.get('street2') }
  get city() { return this.exampleForm.get('city') } 
  get zip() { return this.exampleForm.get('zip') } 
  get model() { return this.exampleForm.get('model') } 
  get selectorControl() { return this.exampleForm.get('selectorControl') } 
  get item() { return this.exampleForm.get('item') } 

  submitForm() {
    console.log(this.exampleForm.value);
    const formData = this.exampleForm.value;
    this.http.post('http://localhost:8080/save', formData).subscribe(
      response => {
        console.log('Form submitted successfully!', response);

      },
      error => {
        console.error('Error submitting form:', error);
  
      }
    );
  }
  
  Allproduct()
  {
    console.log("all");
    this.router.navigate(['admin/allrecords']);
    
  }


  // displayedColumns: string[] = ['name', 'address', 'weight', 'symbol'];
  // dataSource:any;

  // apiData: any[] = [];

  // constructor(private http:HttpClient){}

  // ngOnInit() {
  //   this.http.get<any>('http://localhost:8080/getalldata').subscribe(data => {
  //     this.apiData = data;
  //   });
  // }


}
