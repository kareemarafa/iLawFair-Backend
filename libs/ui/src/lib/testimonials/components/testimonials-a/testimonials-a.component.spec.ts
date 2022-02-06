import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TestimonialsAComponent } from './testimonials-a.component'

describe('TestimonialsAComponent', () => {
  let component: TestimonialsAComponent
  let fixture: ComponentFixture<TestimonialsAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
