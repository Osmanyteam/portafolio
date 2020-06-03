import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LimitPipe } from './limit.pipe';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    LimitPipe
  ],
  exports: [
    MatGridListModule,
    HttpClientModule,
    TranslateModule,
    LimitPipe
  ],
  providers: [
    DataService
  ]
})
export class SharedModule {
  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('es');
  }
}
