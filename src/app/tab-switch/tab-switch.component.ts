import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.scss']
})
export class TabSwitchComponent implements OnInit {

  selectedSkill : string = 'organic'

  onSkillChange(val : string) {
    this.selectedSkill = val
  }

  constructor() { }

  ngOnInit(): void {
  }

}
