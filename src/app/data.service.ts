import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PartSkillType {
  name: string;
  projects: string[];
}

export interface SkillType {
  parts: Array<PartSkillType>;
  name: string;
}

export type SkillsType = Array<SkillType>;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getSkills(): Observable<SkillsType> {
    const skills: SkillsType =  [
      {
        name: 'FrontEnd',
        parts: [{
          name: 'nodejs',
          projects: ['one']
        }]
      }
    ];

    return of(skills);
  }
}
