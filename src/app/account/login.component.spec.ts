import {async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import{LoginComponent} from './login.Component';
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('LoginComponent',()=> {
    let component : LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule
            ],
          declarations: [ LoginComponent],
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    fixture.detectChanges();
    });
    it('should create a form using formbuilder', () => {
        expect(component.form instanceof FormGroup).toBeTruthy();

    it('should create'),
    inject(
      [HttpTestingController],
      () => {
        expect(component).toBeTruthy();
      }
    )});
});