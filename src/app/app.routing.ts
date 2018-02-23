import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import * as Components from './app.components-list';
import { UsersComponent } from './users/users.component';
import { PrizesComponent } from './prizes/prizes.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppliedUserComponent } from './resources/appliedusers/appliedusers.component';
import { InternshipAddComponent } from './resources/internships/internshipadd/internshipadd.component';
import { OpportunityAddComponent } from './resources/opportunities/opportunityadd/opportunityadd.component';
import { ScholarshipAddComponent } from './resources/scholarships/scholarshipadd/scholarshipadd.component';
import { PrizeAddComponent } from './prizes/prizeadd/prizeadd.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationAddComponent } from './notifications/notificationadd/notificationadd.component';
import { RoleGuard } from './_guards/role.guard';
import { OrganizationsComponent } from './organizations/organizations.component';

const appRoutes: Routes = [
  { path: 'login', component: Components.LoginComponent },

  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'prizes', component: PrizesComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'prizeadd', component: PrizeAddComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'prizeedit/:prizeid', component: PrizeAddComponent, canActivate: [AuthGuard] },

  { path: 'internshipadd', component: InternshipAddComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'internshipedit/:internshipId', component: InternshipAddComponent, canActivate: [AuthGuard] },

  { path: 'applicants/:resourceId', component: AppliedUserComponent, canActivate: [AuthGuard] },

  { path: 'opportunityadd', component: OpportunityAddComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'opportunityedit/:opportunityId', component: OpportunityAddComponent, canActivate: [AuthGuard] },

  { path: 'scholarshipadd', component: ScholarshipAddComponent, canActivate: [AuthGuard] },

  { path: 'internshipadd', component: InternshipAddComponent, canActivate: [AuthGuard] },

  { path: 'internshipedit/:internshipId', component: InternshipAddComponent, canActivate: [AuthGuard] },

  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'notificationadd', component: NotificationAddComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: 'organizations', component: OrganizationsComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login'}
];

export const routing = RouterModule.forRoot(appRoutes);

