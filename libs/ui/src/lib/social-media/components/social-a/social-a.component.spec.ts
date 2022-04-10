import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SocialAComponent } from './social-a.component'

describe('SocialAComponent', () => {
  let component: SocialAComponent
  let fixture: ComponentFixture<SocialAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
