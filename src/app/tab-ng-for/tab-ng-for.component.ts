import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-for',
  templateUrl: './tab-ng-for.component.html',
  styleUrls: ['./tab-ng-for.component.scss']
})
export class TabNgForComponent implements OnInit {

  skillsArr = [
    {
      skillNAme : 'HTML',
      skillInfo : 'It uses tags and elements to instruct a web browser on how to display text, images, links'
    },
    {
      skillNAme : 'CSS',
      skillInfo : 'It uses tags and elements to instruct a web browser on how to display text, images, links'
    },
    {
      skillNAme : 'JAVASCRIPT',
      skillInfo : 'It uses tags and elements to instruct a web browser on how to display text, images, links'
    },
    {
      skillNAme : 'ANGULAR',
      skillInfo : 'It uses tags and elements to instruct a web browser on how to display text, images, links'
    },
  ]

  selectedSkill : string = 'Html'

  constructor() { }

  ngOnInit(): void {
  }

}
