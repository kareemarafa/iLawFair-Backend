import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubElementListComponent } from './sub-element-list.component';

describe('SubElementListComponent', () => {
  let component: SubElementListComponent;
  let fixture: ComponentFixture<SubElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubElementListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
