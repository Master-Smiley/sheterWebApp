import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterPreviewComponent } from './shelter-preview.component';

describe('ShelterPreviewComponent', () => {
  let component: ShelterPreviewComponent;
  let fixture: ComponentFixture<ShelterPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
