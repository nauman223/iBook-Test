import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryTreeComponent } from './components/directory-tree/directory-tree.component';
import { EditorComponent } from './components/editor/editor.component';
import { UserDraftViewComponent } from './components/user-draft-view/user-draft-view.component';
import { UserDraftComponent } from './components/user-draft/user-draft.component';

const routes: Routes = [{
  path: '',
  component: DirectoryTreeComponent,
  loadChildren: () => import('./modules/directory-tree.module').then(m => m.DirectoryTreeModule)
},
{
  path: 'editor',
  component: EditorComponent,
  loadChildren: () => import('./modules/editor.module').then(m => m.EditorModule)
},
{
  path: 'user-draft',
  component: UserDraftComponent,
  loadChildren: () => import('./modules/user-draft.module').then(m => m.UserDraftModule)
},
{
  path: 'user-draft-view',
  component: UserDraftViewComponent,
  loadChildren: () => import('./modules/user-draft-view.module').then(m => m.UserDraftViewModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
