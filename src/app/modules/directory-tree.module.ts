import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryTreeComponent } from 'src/app/components/directory-tree/directory-tree.component';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';



@NgModule({
  declarations: [DirectoryTreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
  ]
})
export class DirectoryTreeModule { }
