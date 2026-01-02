import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif2',
  templateUrl: './tab-ngif2.component.html',
  styleUrls: ['./tab-ngif2.component.scss']
})
export class TabNgif2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSkills : string = 'Flex'

  onSkillChange(skill:string){
   this.selectedSkills = skill
 }

 

}
