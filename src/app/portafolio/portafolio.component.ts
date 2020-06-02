import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsType, DataService } from '../data.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  public breakpoint = 2;
  public skills: Observable<SkillsType>;
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.skills = this.data.getSkills();
  }

  public onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }


}
