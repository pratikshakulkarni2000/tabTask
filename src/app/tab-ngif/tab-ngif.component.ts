import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif',
  templateUrl: './tab-ngif.component.html',
  styleUrls: ['./tab-ngif.component.scss']
})
export class TabNgifComponent implements OnInit {

  selectedSkill : string = 'html'

  constructor() { }

  ngOnInit(): void {
  }

  onSkillChange(skill : string) {
    this.selectedSkill = skill
  }

}
