import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  isLogedIn:number=0;
  username:string;
  password:string;
  errorMsg:string="";
  signup:number=0;
  hidebtn:number=0;
  nosinup:number=0;



  constructor(private router: Router,private http:HttpClient, private formbuilder:FormBuilder) {}

  SignupForm=this.formbuilder.group({
    
    username: ['', [Validators.required]],
  password: ['', [Validators.required]],
  role: ['', [Validators.required]]
  });

  get user() { return this.SignupForm.get('username')}
  get pass() { return this.SignupForm.get('password')}
   get roleno() { return this.SignupForm.get('role')}

  registrationForm()
  {
    console.log(this.SignupForm.value);
    const userformdata=this.SignupForm.value;
    this.http.post('http://localhost:8080/Register',userformdata).subscribe(
      response=>{
        console.log('Register sucessfully');
      },
      error=>{
        console.log('Register failed');
      }
    );
  }

  sign()
  {
    this.signup=1;
    this.nosinup=1;
  }

  islog()
  {
    this.isLogedIn=0;
    this.nosinup=0;
    this.signup=0;
  }

  login()
  {
  let url="http://localhost:8080/login/"+this.username+"/"+this.password;
  this.http.get(url).subscribe(
    (num:number)=>
    {
    if(num==-1)
    this.errorMsg="Username wrong";
    else if(num==-2)
    this.errorMsg="Pass wrong";                                                                            
    else if(num==2)
    {
      this.hidebtn=1;
      this.isLogedIn=1;
      this.signup=0;
    }
    else
    {
      this.hidebtn=0;
      this.isLogedIn=1;
      this.signup=0;
    }
  }

  );}

  
  goToSecondComponent() {
    this.router.navigate(['/view-all']);
  }

  goToFirstComponent()
  {
    this.router.navigate(['/register']);

  }

  main()
  {
    this.router.navigate(['/']);
  }

  logout()
  {
    this.isLogedIn=0;
    this.nosinup=0;
    this.router.navigate(['/']);
  }

  // constructor(private formBuilder: FormBuilder ,private http: HttpClient, private router:Router) {}

  // exampleForm = this.formBuilder.group({

  //   firstName: ['', [Validators.required,Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]],
  //   lastName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]],
  //   date: ['', [Validators.required]],
  //   email:['',[Validators.required]],
  //   phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  //   street:['', Validators.required],
  //   street2:['', Validators.required],
  //   city:['', Validators.required],
  //   zip:['', Validators.required],
  //   model:['', [Validators.required,Validators.pattern('^[0-9]+$')]],
  //   selectorControl:['', Validators.required],
  //   item:['', Validators.required]

  // }); 
  
  
  // get user() { return this.exampleForm.get('firstName') }
  // get user2(){ return this.exampleForm.get('firstName') }
  // get date() { return this.exampleForm.get('date') }
  // get email(){ return this.exampleForm.get('email') }
  // get phone() { return this.exampleForm.get('phone') }
  // get street() { return this.exampleForm.get('street') }
  // get street2() { return this.exampleForm.get('street2') }
  // get city() { return this.exampleForm.get('city') } 
  // get zip() { return this.exampleForm.get('zip') } 
  // get model() { return this.exampleForm.get('model') } 
  // get selectorControl() { return this.exampleForm.get('selectorControl') } 
  // get item() { return this.exampleForm.get('item') } 

  // submitForm() {
  //   console.log(this.exampleForm.value);
  //   const formData = this.exampleForm.value;
  //   this.http.post('http://localhost:8080/save', formData).subscribe(
  //     response => {
  //       console.log('Form submitted successfully!', response);

  //     },
  //     error => {
  //       console.error('Error submitting form:', error);
  
  //     }
  //   );
  // }
  
  // Allproduct()
  // {
  //   console.log("all");
  //   this.router.navigate(['admin/allrecords']);
    
  // }
















  // private details:any; 


  // constructor(private formBuilder: FormBuilder 
  
  //   ,private http: HttpClient) {}  
  
   
   
  //     exampleForm = this.formBuilder.group({  
  
  //       firstname: ['', [Validators.required,Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]], 
  
  //       lastname: ['', [Validators.required,Validators.pattern('^[A-Z][a-z]+([ ][A-Z][a-z]+)*$')]], 
  
  //       email: ['', [Validators.required]], 
  
  //       phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], 
  
  //       date: ['', [Validators.required]], 
  
  //       street:['', Validators.required] 
  
  //     });  
  
  
  //     get first()
  //     { 
  //       return this.exampleForm.get('firstname') 
  //     } 
  
  //     get last() 
  //     { 
  //       return this.exampleForm.get('lastname') 
  //     } 

  //     get email() 
  //     { 
  //       return this.exampleForm.get('email') 
  //     }
  
  //     get date() 
  //     { 
  //       return this.exampleForm.get('date') 
  //     } 
  
  //     get phone() 
  //     { 
  //       return this.exampleForm.get('phone') 
  //     } 
  
  //     get street() 
  //     { 
  //       return this.exampleForm.get('street') 
  //     } 



//   ngOnInit() {
//     this.exampleForm = this.formBuilder.group({
//       firstName: ['', [Validators.required]],
//       lastName: ['', [Validators.required]]
//     }, {
//       validators: this.capitalizeFirstLetterValidator.bind(this)
//     });
//   }


//   private capitalizeFirstLetter(value: string): string {
//     if (value) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     } else {
//       return value;
//     }
//   }
//   private capitalizeFirstLetter1(value: string): string {
//     if (value) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     } else {
//       return value;
//     }
//   }


//   private capitalizeFirstLetterValidator(formGroup: FormGroup) {
//     const firstNameControl = formGroup.get('firstName');
//     const lastNameControl = formGroup.get('lastName');
  
//     const firstNameValue = firstNameControl.value;
//     const lastNameValue = lastNameControl.value;
  
//     if (firstNameValue) {
//       firstNameControl.setValue(this.capitalizeFirstLetter(firstNameValue));
//     }
  
//     if (lastNameValue) {
//       lastNameControl.setValue(this.capitalizeFirstLetter1(lastNameValue));
//     }
  
//     return null;
//   }
  
  }