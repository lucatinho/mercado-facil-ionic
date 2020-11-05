import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnderecoEditPage } from './endereco-edit.page';

describe('EnderecoEditPage', () => {
  let component: EnderecoEditPage;
  let fixture: ComponentFixture<EnderecoEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnderecoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
