import {
  AfterViewInit, Component, forwardRef, Host, Injector, Input, OnInit, Optional, Provider,
  Self
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormControl, FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, NgControl,
  NgModel
} from '@angular/forms';

const CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => AutoCompleteComponent)
};

@Component({
  selector: 'app-auto-complete',
  template: `
    <div class="input-field">
      <div class="input-wrapper">
        <input *ngIf="!!_formControlDirective" name='country' [formControl]="formControl"/>
        <input *ngIf="!!_ngModelDirective" name='country' [formControl]="formControl"/>
      </div>
      <div *ngIf="_formControlDirective.control.touched && !_formControlDirective.control.valid">
        <span class="error-message">{{errorMessage}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./auto-complete.component.scss'],

  providers: [CONTROL_VALUE_ACCESSOR]
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input() validationMessages: { [key: string]: string };

  _formControlDirective: FormControlDirective;
  _ngModelDirective: NgModel;
  _formNameDirective: FormControlName

  get formControl() {
    if (this._formControlDirective) {
      return this._formControlDirective.control;
    } else if (this._ngModelDirective) {
      return this._ngModelDirective.control;
    } else if (this._formNameDirective) {
      return this._formNameDirective.control;
    }
    return null;
  }

  get errorMessage(): string {
    if (this._formControlDirective.control && this._formControlDirective.control.errors) {
      const errors = this._formControlDirective.control.errors;

      for (const key in errors) {
        if (errors[key]) {


          const message = this.validationMessages[key];
          if (message) {
            return message;
          }
          return 'Invalid value: ' + key;
        }
      }
    }
  }

  ngAfterViewInit(): void {

    console.log('formcontrol', this.formControl);
    if(this.formControl) {
      this.formControl.valueChanges.subscribe(val => console.log('new value', val));
    }
  }

  ngOnInit(): void {
    this._formControlDirective = this._injector.get(FormControlDirective, null);
    this._ngModelDirective = this._injector.get(NgModel, null);
    this._formNameDirective = this._injector.get(FormControlName, null);


  }


  constructor(@Self() private _injector: Injector) {
  }

  onChange = (_: any) => {
  };

  onTouch = () => {
  };

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}

