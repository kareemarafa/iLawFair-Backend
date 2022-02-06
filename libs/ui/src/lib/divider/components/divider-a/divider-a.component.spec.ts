import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DividerAComponent } from './divider-a.component'

describe('DividerAComponent', () => {
  let component: DividerAComponent
  let fixture: ComponentFixture<DividerAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DividerAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
