import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPercentageComponent } from './student-percentage.component';

describe('StudentPercentageComponent', () => {
  let component: StudentPercentageComponent;
  let fixture: ComponentFixture<StudentPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
