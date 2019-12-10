import { NgModule } from '@angular/core';
import { EuLoaderComponent } from './eu-loader.component';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    EuLoaderComponent,
    EuPopupInsertionDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    EuLoaderComponent,
    EuPopupInsertionDirective,
    LoaderComponent
  ],
  entryComponents: [
    EuLoaderComponent,
    LoaderComponent
  ],
})
export class EuLoaderModule {
}
