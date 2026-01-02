import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif4',
  templateUrl: './tab-ngif4.component.html',
  styleUrls: ['./tab-ngif4.component.scss']
})
export class TabNgif4Component implements OnInit {


  selectedSkill : string = '.Net'

  onSkillChange(skill:string){
    this.selectedSkill = skill
  }

  constructor() { }

  ngOnInit(): void {
  }

}
