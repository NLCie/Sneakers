import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCollectionsComponent } from './men-collections.component';

describe('MenCollectionsComponent', () => {
  let component: MenCollectionsComponent;
  let fixture: ComponentFixture<MenCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
