import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentDynamicFormComponent } from './component-dynamic-form.component'

describe('ComponentDynamicFormComponent', () => {
  let component: ComponentDynamicFormComponent
  let fixture: ComponentFixture<ComponentDynamicFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDynamicFormComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDynamicFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
