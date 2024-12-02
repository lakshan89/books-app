import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksManageComponent } from './components/books-manage/books-manage.component';

const routes: Routes = [
  { path: 'view/:id', component: BooksManageComponent },
  { path: 'create', component: BooksManageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
