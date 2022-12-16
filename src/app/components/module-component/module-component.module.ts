import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ComponentComponent } from './../component/component.component';
import { ModuleComponentRoutingModule } from './module-component-routing.module';

@NgModule({
  declarations: [ComponentComponent],
  imports: [CommonModule, ModuleComponentRoutingModule, MatCardModule],
})
export class ModuleComponentModule {}
