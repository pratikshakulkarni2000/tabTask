import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif3',
  templateUrl: './tab-ngif3.component.html',
  styleUrls: ['./tab-ngif3.component.scss']
})
export class TabNgif3Component implements OnInit {

  selectedSkill :string = 'React'

  onSkillChange(skill : string) {
    this.selectedSkill = skill
  }

  constructor() { }

  ngOnInit(): void {
  }

}
