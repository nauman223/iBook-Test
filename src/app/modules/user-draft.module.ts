import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDraftComponent } from '../components/user-draft/user-draft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserDraftComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDraftModule { }
