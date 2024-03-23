import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeServiceService {

  constructor() { }


  like:number=4999;

  
  likeCounter(){
    this. like=this.like+1;

    document.getElementById("show")!.innerHTML = this. like.toString();
    localStorage.setItem('likeCount',this. like.toString());

  }

  
 showAlert()
 {
alert(" भरी मेहफिल मे नाम तो सुना ही होगा🔥!  ASH_PHOTOGRAPHY📸 ")
 }
  

// like 
// let a = 4999;
// export  function lcounter() {
     
//       a = a + 1;  //a++;
//       document.getElementById("show").innerHTML = a;

//       localStorage.setItem('likeCount', a);
//   }


}
