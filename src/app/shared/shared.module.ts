import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityInputsComponent } from './components/accessibility-inputs/accessibility-inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputBooleanComponent } from './components/input-boolean/input-boolean.component';
import { TitleDemoComponent } from './components/title-demo/title-demo.component';
import { TitleParamsComponent } from './components/title-params/title-params.component';
import { SpacedComponent } from './components/spaced/spaced.component';
import { ImplementationInfoComponent } from './components/implementation-info/implementation-info.component';
import { InputNumberComponent } from './components/input-number/input-number.component';



@NgModule({
  declarations: [
    AccessibilityInputsComponent,
    InputTextComponent,
    InputBooleanComponent,
    TitleDemoComponent,
    TitleParamsComponent,
    SpacedComponent,
    ImplementationInfoComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AccessibilityInputsComponent,
    InputTextComponent,
    InputBooleanComponent,
    TitleDemoComponent,
    TitleParamsComponent,
    SpacedComponent,
    ImplementationInfoComponent,
    InputNumberComponent
  ]
})
export class SharedModule { }
