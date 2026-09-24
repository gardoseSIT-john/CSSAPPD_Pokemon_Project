import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantoInformation } from './kanto-information';

describe('KantoInformation', () => {
  let component: KantoInformation;
  let fixture: ComponentFixture<KantoInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
