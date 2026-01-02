import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif5',
  templateUrl: './tab-ngif5.component.html',
  styleUrls: ['./tab-ngif5.component.scss']
})
export class TabNgif5Component implements OnInit {

  selectedSkill : string = 'html'

  onSkillChange (val : string){
    this.selectedSkill = val
  }

  constructor() { }

  ngOnInit(): void {
  }

}
