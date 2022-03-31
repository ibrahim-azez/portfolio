import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [MatButtonModule, TextFieldModule],
})
export class MaterialModule {}
