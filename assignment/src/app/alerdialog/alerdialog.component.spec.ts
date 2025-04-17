import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerdialogComponent } from './alerdialog.component';

describe('AlerdialogComponent', () => {
  let component: AlerdialogComponent;
  let fixture: ComponentFixture<AlerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlerdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
