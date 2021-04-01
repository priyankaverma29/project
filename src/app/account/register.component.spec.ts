import {async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import{RegisterComponent} from './Register.Component';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';
describe('registercomponent',()=> {
    let component : RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(()=> {
        TestBed.configureTestingModule({
          declarations: [ RegisterComponent],
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create a form using formbuilder', () => {
      expect(component.form instanceof FormGroup).toBeTruthy();

    it('should create',
    inject(
      [HttpTestingController],
      () => {
        expect(component).toBeTruthy();
      }
    )
  )})
  });