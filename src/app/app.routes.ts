import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';

export const routes: Routes = [
    {path: "", component: TableComponent},
    {path: "User", component: UserPageComponent},
    {path: "Todo", component: TodoListsComponent}
];
