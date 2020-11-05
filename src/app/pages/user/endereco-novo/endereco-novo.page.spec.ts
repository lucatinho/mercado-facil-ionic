import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnderecoNovoPage } from './endereco-novo.page';

describe('EnderecoNovoPage', () => {
  let component: EnderecoNovoPage;
  let fixture: ComponentFixture<EnderecoNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnderecoNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
