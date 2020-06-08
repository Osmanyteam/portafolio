import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioComponent } from './portafolio.component';
import { SharedModule } from '../shared-modules';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BioComponent } from './bio/bio.component';
import { Location } from '@angular/common';

describe('PortafolioComponent', () => {
  let component: PortafolioComponent;
  let fixture: ComponentFixture<PortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortafolioComponent, BioComponent],
      imports: [
        SharedModule,
        CarouselModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'bio', component: BioComponent }
        ])
      ],
      providers: [Location]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title skills', () => {
  //   fixture = TestBed.createComponent(PortafolioComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   console.log('empty', compiled.querySelector('#skills h3'));
  //   expect(compiled.querySelector('#skills h3').textContent)
  //     .toContain('');
  // });

  it('should contain h3 for tittle', () => {
    const h3Ele = fixture.debugElement.query(By.css('#skills h3'));
    expect(h3Ele.nativeElement.tagName).toEqual('H3');
  });

  it('Should navigate to / before click in link bio', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });
});
