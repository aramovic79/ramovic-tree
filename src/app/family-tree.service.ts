import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FamilyMember {
  name: string;
  dateOfBirth: string | null;
  class: string;
  children: FamilyMember[];
}

@Injectable({ providedIn: 'root' })
export class FamilyTreeService {
  private dataUrl = 'assets/family-tree.json';

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<FamilyMember> {
    return this.http.get<FamilyMember>(this.dataUrl);
  }

  getMembersByRootId(rootName: string): Observable<FamilyMember | undefined> {
    // Returns the first (highest hierarchy) member whose name matches rootName
    // If multiple nodes have the same name, the one closest to the root is returned
    return new Observable(observer => {
      this.getAllMembers().subscribe(tree => {
        const ensureChildrenArray = (member: FamilyMember): FamilyMember => {
          if (!Array.isArray(member.children)) {
            member.children = [];
          }
          if (member.children.length) {
            member.children = member.children.map(ensureChildrenArray);
          }
          return member;
        };
        const findMember = (member: FamilyMember): FamilyMember | undefined => {
          if (member.name.toLowerCase().includes(rootName.toLowerCase())) return member; // first match = highest hierarchy
          for (const child of member.children || []) {
            const found = findMember(child);
            if (found) return found;
          }
          return undefined;
        };
        ensureChildrenArray(tree);
        observer.next(findMember(tree));
        observer.complete();
      });
    });
  }
}
