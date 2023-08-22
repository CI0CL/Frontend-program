import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListOverviewComponent } from './team-list-overview.component';

describe('TeamListOverviewComponent', () => {
  let component: TeamListOverviewComponent;
  let fixture: ComponentFixture<TeamListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
