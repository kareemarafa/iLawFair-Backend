import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MapAComponent } from './map-a.component'

describe('MapAComponent', () => {
  let component: MapAComponent
  let fixture: ComponentFixture<MapAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
