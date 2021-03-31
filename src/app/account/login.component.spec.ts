import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import{LoginComponent} from './login.Component';

describe('LoginComponent',()=> {
    let component : LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(()=> {
        TestBed.configureTestingModule({
          declarations: [ LoginComponent],
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create',()=> {
        expect(component).toBeTruthy();
    });
    it("testing title",()=>{
        expect(component.componentName).toBe("login")
})
});