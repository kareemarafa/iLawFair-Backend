import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StatisticsAComponent } from './statistics-a.component'

describe('StatisticsAComponent', () => {
  let component: StatisticsAComponent
  let fixture: ComponentFixture<StatisticsAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
