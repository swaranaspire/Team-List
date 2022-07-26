import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeammemberService } from '../teammember.service';
// import {enableProdMode} from '@angular/core';

// enableProdMode();


@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.css']
})
export class TeammembersComponent implements OnInit {
   
    public column: string ='';
    public filterTerm: string = '';
  filter(){
    this.teammemberService.getFilteredData(this.filterTerm).subscribe((data:any)=>{this.allMembers =data;});
  }

  delete(){
    this.teammemberService.deleteVehicle().subscribe((data: any) => {alert('success'), location.reload();},
    (error:any) => {alert('internal server error');});
  }
  public allMembers: any =[];
  constructor(private teammemberService: TeammemberService,router:Router) {
    this.teammemberService.getteammember().subscribe(
      (data: any) => {console.warn("data",data.Team) 
        this.allMembers = data.Team;},
      (error: any) => {alert('internal server error')}
    )
   }
    public member: any=[];
    save(member:any){
      this.member=member;
    }
  ngOnInit(): void {
  }

}
