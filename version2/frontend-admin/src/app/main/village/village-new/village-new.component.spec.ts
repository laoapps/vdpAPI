import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageNewComponent } from './village-new.component';

describe('VillageNewComponent', () => {
  let component: VillageNewComponent;
  let fixture: ComponentFixture<VillageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
