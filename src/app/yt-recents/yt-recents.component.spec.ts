import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtRecentsComponent } from './yt-recents.component';

describe('YtRecentsComponent', () => {
  let component: YtRecentsComponent;
  let fixture: ComponentFixture<YtRecentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtRecentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
