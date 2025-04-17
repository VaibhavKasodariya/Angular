import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student1:string[]=["hello", "123","A"];
  student2:string[]=["vaibhav", "12","B"];
  student3:string[]=["prijen", "02","A"];
  student4:string[]=["keti", "78","B"];
  student5:string[]=["jay", "34","A"];
  //student2:string[]=["Vaibhav", "321","A"];
  faculty:string[]=["vaibhav","1","computer science"];
  faculty2:string[]=["balar","2","MAD"];
  faculty3:string[]=["dashrath","3","cyber security"];
  faculty4:string[]=["dev","4","software engineering"];
  faculty5:string[]=["keti","5","data structure"];

  // student array
  students= [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'C' },
    { id: 4, name: 'David', age: 23, grade: 'A' },
    { id: 5, name: 'Eve', age: 20, grade: 'B' }
  ];


// faculty array
  facultys=[
    {name:"Vaibhav",course:"Data science",sub_code:"101"},
    {name:"prijen",course:"Data structure",sub_code:"502"},
    {name:"keti",course:"communication skill",sub_code:"202"},
    {name:"ravi",course:"MAD",sub_code:"203"},
    {name:"dev",course:" JAVA",sub_code:"205"},
  ]
  getfacultys(){
    return this.facultys;
  }
  getstudent(){
    return this.students;
  }

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
