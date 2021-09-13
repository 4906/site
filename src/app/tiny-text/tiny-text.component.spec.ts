import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyTextComponent } from './tiny-text.component';

describe('TinyTextComponent', () => {
  let component: TinyTextComponent;
  let fixture: ComponentFixture<TinyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
