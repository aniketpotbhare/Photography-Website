import { LikeServiceService } from './../like-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {
 constructor(private LikeServiceServiceObj:LikeServiceService){}
 
//Image
logo:string="../app/../assets/logo.jpg";
photo1 :string='../app/../assets/pro4.jpg';
photo2:string="../app/../assets/pro2.jpg"; 
photo3:string="../app/../assets/pro3.jpg";
photo4:string="../app/../assets/dp4.jpg";
photo5:string="../app/../assets/img1.png";
photo6:string="../app/../assets/img2.jpg";
photo7:string="../app/../assets/img3.jpg";
// photo9:string="../app/../assets/pro2.jpg";

// Like Functionality
//  like:any=4999; 
 like:any=0;

 likeCounter(){
  this. like=this.LikeServiceServiceObj.likeCounter();
 }

 ngOnInit(){
  
  this.LikeServiceServiceObj.showAlert();
  const storedValue = localStorage.getItem('likeCount');
  if (storedValue) 
  {
    this.like = +storedValue;
  } else {
    this.like = 4999; 
    localStorage.setItem('likeCount', '4999');
  }
  // this. like = +localStorage.getItem('likeCount');
  
 }

// forms
// User:any[]=[];

name:string=''
email:string=''
msg:string=''
  // name: string;
  // email: string;
  // msg: string;
  save() {
   
    const formData = new FormData();
    formData.append('access_key', 'ed431a7d-ec5e-4b93-bcd8-f3daf9c0f2b0');
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('msg', this.msg);

    fetch("https://api.web3forms.com/submit", 
    {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submission successful:', data);
      alert('Form submission successful:');
      // clear frm
      this.name = '';
      this.email = '';
      this.msg = '';
      
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert("Error!!")
      
    });
  }
}
