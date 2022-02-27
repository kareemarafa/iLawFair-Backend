import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PageFormDialogComponent } from './page-form-dialog.component'

describe('PageFormDialogComponent', () => {
  let component: PageFormDialogComponent
  let fixture: ComponentFixture<PageFormDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFormDialogComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
