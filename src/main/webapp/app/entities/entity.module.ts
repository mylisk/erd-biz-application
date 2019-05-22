import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#ERdBizApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#ERdBizApplicationCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#ERdBizApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#ERdBizApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#ERdBizApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#ERdBizApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#ERdBizApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#ERdBizApplicationJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ERdBizApplicationEntityModule {}
