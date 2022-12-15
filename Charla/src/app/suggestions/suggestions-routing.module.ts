import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsFormComponent } from './pages/suggestions-form/suggestions-form.component';
import { SuggestionsListComponent } from './pages/suggestions-list/suggestions-list.component';

const routes: Routes = [
  {path: 'suggestion-list', component: SuggestionsListComponent},
  {path: 'suggestion-form', component: SuggestionsFormComponent},
  {path: '**', redirectTo: 'suggestion-list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
