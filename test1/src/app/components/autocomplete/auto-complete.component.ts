import {Component, forwardRef, Host, Injector, Input, OnInit, Optional, Provider, Self} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR, NgControl,
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
        <input name='country' [formControl]="_ngControl.control"/>
      </div>
      <div *ngIf="_ngControl.control.touched && !_ngControl.control.valid">
        <span class="error-message">{{errorMessage}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./auto-complete.component.scss'],

  providers: [CONTROL_VALUE_ACCESSOR]
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit {
  @Input() validationMessages: { [key: string]: string };

  _ngControl: NgControl;
  _formControl: AbstractControl;

  get errorMessage(): string {
    if (this._ngControl.control && this._ngControl.control.errors) {
      const errors = this._ngControl.control.errors;

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

  ngOnInit(): void {
    this._ngControl = this._injector.get(NgControl);
    this._formControl = this._ngControl.control;

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

