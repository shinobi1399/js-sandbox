import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AutoCompleteComponent} from './auto-complete.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent],
})
export class AutoCompleteModule {

  public static forRoot(): ModuleWithProviders {
    return {
      providers: [],
      ngModule: AutoCompleteModule
    }
  }
}
