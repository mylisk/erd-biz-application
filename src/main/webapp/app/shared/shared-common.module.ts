import { NgModule } from '@angular/core';

import { ERdBizApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ERdBizApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ERdBizApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ERdBizApplicationSharedCommonModule {}
