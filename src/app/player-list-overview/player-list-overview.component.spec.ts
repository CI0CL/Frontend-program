import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListOverviewComponent } from './player-list-overview.component';

describe('PlayerListOverviewComponent', () => {
  let component: PlayerListOverviewComponent;
  let fixture: ComponentFixture<PlayerListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
