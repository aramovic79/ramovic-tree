import { Component, HostListener } from '@angular/core';

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

  zoomLevel = 1.0; 
  cursorX = 0;
  cursorY = 0;
  isDragging = false;
  previousX = 0;
  previousY = 0;

  constructor() {}

  ngOnInit(): void {}

  addFamilyMember() {
    if (this.newMember.name && this.newMember.relationship) {
      this.familyMembers.push({ ...this.newMember });
      this.newMember = {};
    }
  }

  @HostListener('mousewheel', ['$event'])
  onScroll(event: any) {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
    event.preventDefault();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any) {
    if (event.button === 0) { 
      this.isDragging = true;
      this.previousX = event.clientX;
      this.previousY = event.clientY;
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.previousX;
      const deltaY = event.clientY - this.previousY;

      const scaleFactor = 1 / this.zoomLevel;

      this.cursorX -= deltaX * scaleFactor;
      this.cursorY -= deltaY * scaleFactor;

      this.previousX = event.clientX;
      this.previousY = event.clientY;
    }
  }

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    this.zoomLevel -= 0.1;
  }
}
