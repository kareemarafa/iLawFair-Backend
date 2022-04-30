import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterAComponent } from './newsletter-a.component';

describe('NewsletterAComponent', () => {
  let component: NewsletterAComponent;
  let fixture: ComponentFixture<NewsletterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
