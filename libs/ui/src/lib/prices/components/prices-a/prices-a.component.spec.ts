import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PricesAComponent } from './prices-a.component'

describe('PricesAComponent', () => {
  let component: PricesAComponent
  let fixture: ComponentFixture<PricesAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricesAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
