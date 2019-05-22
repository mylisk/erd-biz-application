import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ERdBizApplicationSharedLibsModule,
  ERdBizApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [ERdBizApplicationSharedLibsModule, ERdBizApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ERdBizApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ERdBizApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: ERdBizApplicationSharedModule
    };
  }
}
