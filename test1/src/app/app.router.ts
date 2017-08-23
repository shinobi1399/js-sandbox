
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from '../calculator/calculator.component';
import {AutoCompleteContainerComponent} from './containers/autocomplete-demo/autocomplete.container';

const ROUTES: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: '', redirectTo: 'autocomplete', pathMatch: 'full'},
  {path: 'autocomplete', component: AutoCompleteContainerComponent}
];


export const routeRoutes = RouterModule.forRoot(ROUTES);
