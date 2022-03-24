import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../generated/directives/proxies';

@NgModule({
  imports: [CommonModule],
  declarations: [MyComponent],
  exports: [MyComponent]
 })
 export class CoreComponentsAngularModule {}
 
