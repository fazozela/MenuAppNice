import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsFormComponent } from './pages/suggestions-form/suggestions-form.component';
import { SuggestionsListComponent } from './pages/suggestions-list/suggestions-list.component';


@NgModule({
  declarations: [
    SuggestionsFormComponent,
    SuggestionsListComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ],
  exports:[
    SuggestionsFormComponent,
    SuggestionsListComponent
  ]
})
export class SuggestionsModule { }
