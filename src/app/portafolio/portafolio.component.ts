import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsType, DataService, PartSkillType } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  public selectedPart: Partial<PartSkillType> = {
    projects: []
  };

  public telephone = '+50587138538';
  public mail = 'jos.ojiron@gmail.com';
  public github = 'https://github.com/Osmanyteam';

  public breakpoint = 2;
  public skills: Observable<SkillsType>;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
    },
    nav: true
  };

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.skills = this.data.getSkills();
    this.skills.subscribe(next => {
      if (this.selectedPart.projects.length === 0) {
        this.selectedPart = next[0].parts[0];
      }
    });
  }

  public selectProject(project) {
    this.selectedPart = project;
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 2;
  }


}
