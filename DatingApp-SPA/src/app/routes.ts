import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ListsComponent} from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {MessagesComponent} from './messages/messages.component';
import {AuthGuard} from './_guards/auth.guard';
import {MemberDetailResolver} from './_resolvers/member-detail.resolver';



export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children: [
        {path: 'lists', component: ListsComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
    {path: 'messages', component: MessagesComponent}]},
    {path: '**', redirectTo: '', pathMatch: 'full'}

]