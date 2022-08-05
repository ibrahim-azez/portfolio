import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgxTranslateModule } from './core/modules/ngx-translate.module';
import { AngularMaterialModule } from './core/modules/angular-material.module';

// import { WorkerAppModule } from '@angular/platform-webworker';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
		BrowserAnimationsModule,
		AngularMaterialModule,
		NgxTranslateModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
