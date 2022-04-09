import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutBComponent } from './about-b.component'

describe('AboutBComponent', () => {
  let component: AboutBComponent
  let fixture: ComponentFixture<AboutBComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutBComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
