import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  student1:string[]=["hello", "123","A"];
  student2:string[]=["vaibhav", "12","B"];
  student3:string[]=["prijen", "02","A"];
  student4:string[]=["keti", "78","A"];
  student5:string[]=["jay", "34","B"];
  //student2:string[]=["Vaibhav", "321","A"];
  faculty:string[]=["vaibhav","1","computer science"];
  faculty2:string[]=["balar","2","MAD"];
  faculty3:string[]=["dashrath","3","cyber security"];
  faculty4:string[]=["dev","4","software engineering"];
  faculty5:string[]=["keti","5","data structure"];


  getdetail1():string[]{
    return this.student1;
  }
  getdetail2():string[]{
    //return this.student2;
    return this.faculty;
  }
  getstudent1():string[]{
    return this.student1;
  }
  getstudent2():string[]{
    return this.student2;
  }
  getstudent3():string[]{
    return this.student3;
  }
  getstudent4():string[]{
    return this.student4;
  }  
  getstudent5():string[]{
    return this.student5;
  }  

  getfaculty():string[]{
    return this.faculty;
  }
  getfaculty2():string[]{
    return this.faculty2;
  }
  getfaculty3():string[]{
    return this.faculty3;
  }
  getfaculty4():string[]{
    return this.faculty4;
  }
  getfaculty5():string[]{
    return this.faculty5;
  }

  constructor() { }
}
