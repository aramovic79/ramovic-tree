import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'family-tree';
  familyMembers: any[] = [];
  newMember: any = {};

  possibleRelationships = ['Child', 'Spouse', 'Sibling'];

  constructor() {}

  ngOnInit(): void {}

  addFamilyMember() {
    if (this.newMember.name && this.newMember.relationship) {
      this.familyMembers.push({ ...this.newMember });
      this.newMember = {};
    }
  }

  
}
