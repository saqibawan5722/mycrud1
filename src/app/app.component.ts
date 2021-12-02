import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:MyserviceService) { }
  title = 'Saqi';
  
  @ViewChild('val1') val1:ElementRef;
  @ViewChild('val2') val2:ElementRef;
  @ViewChild('val3') val3:ElementRef;
  
  editMode:boolean = false;
  editindex:number;

  adds =[
    //  {fname : "saqib" , lname: "awan" },
  ];

  onAdd(fn:any ,ln:any ,nn:any ){
    if(this.editMode){
      this.adds[this.editindex] = {
        fname: fn.value,
        lname: ln.value,
        nname: nn.value
      }
    }else{
      this.adds.push({
        fname: fn.value,
        lname: ln.value,
        nname: nn.value
      })
    }
  }


  onDel(id:any){
    if(confirm('you u want to delete this')){
      this.adds.splice(id,1) // id index kaa pass hua , aur 1 tab lhkaa kay kitny items remove karny han
      this.save() // server say bhi data delete hu jeay aur save bhi hu jeay
    }
  }

  save(){
    this.service.mysave(this.adds).subscribe(
    (Response) => console.log(Response),
    (err) => console.log(err)
    )
    
  }

  Fetch(){
    this.service.myfetch().subscribe(
      (Response) => {
      // console.log(Response);// this is use for fetch dataa from database in form of object, lhkan hu ga console
      const data = JSON.stringify(Response)  // is say data string main convert hu jataa he 
      // console.log(data) 
       this.adds = JSON.parse(data) // is say data database say ataa he aur form main show karty han
      },
      (err) => console.log(err)
      )
  }


  onEdit(i:any){
   // console.log(this.adds[i]); // console main dataa ahaa jataa he
    this.editMode= true;
    this.editindex = i;
    this.val1.nativeElement.value = this.adds[i].fname;
    this.val2.nativeElement.value = this.adds[i].lname;
    this.val3.nativeElement.value = this.adds[i].nname;
  }



  ngOnInit(){
    this.Fetch()  // jb bhi refresh kray automaticlly data server say ahaa jeay
  }



}
