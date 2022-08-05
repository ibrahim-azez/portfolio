import { IService } from './core/model';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	siteLanguage = 'English';
	languageList = [
		{ code: 'en', label: 'English' },
		{ code: 'ar', label: 'Arabic' },
	];

	constructor(
		private titleService: Title,
		private translate: TranslateService
	) {
		this.titleService.setTitle($localize`Ibrahim Azez`);
	}

	changeSiteLanguage(localeCode: string): void {
		const selectedLanguage = this.languageList
			.find((language) => language.code === localeCode)
			?.label.toString();
		if (selectedLanguage) {
			this.siteLanguage = selectedLanguage;
			this.translate.use(localeCode);
		}
		const currentLanguage = this.translate.currentLang;
		console.log('currentLanguage', currentLanguage);
		console.log(this.translate);
	}

	navLinks = ['about', 'contact', 'skills', 'services'];
	user = {
		fullName: 'Ibrahim Azez',
		email: 'ibrahimazez@protonamail.com',
		jobTitle: 'Full Stack Engineer',
		social: {
			github: 'https://github.com/ibrahim-azez',

			linkedin: 'https://www.linkedin.com/in/ibrahimazez/',

			dev: 'https://dev.to/ibrahimazez',
		},
	};

	aboutMe: IService = {
		icon: 'aboutme',
		style: 'icon',
		title: 'About me',
		description: `Full stack engineer, I use Angular, Angular Universal, Angular PWA, Angular Material and Bootstrap For frontend development.
		For backend i ues nodeJS as a run time environment and NestJS over ExpressJS for the development.
		I build endpoints using either RESTful API methodology or GraphQL Apollo protocol.
		Modeling and building databases with NoSQL database using MongoDB by the help of mongoose package and SQL database with PostgreSQL using typeORM.
		Git for version control system.
		Nx monorepo for wrapping frontend with backend and Linux as Operating system.
		`,
	};

	serviceList: IService[] = [
		{
			icon: 'angular',
			style: 'service',
			title: 'Angular',
			description: `Designing and developing WebApp with Angular, Angular Universal, Angular PWA, state management with RxJS or NGXS`,
		},
		{
			icon: 'frontend',
			style: 'service',
			title: 'Styling',
			description: `Styling for responsive WebApp with SCSS, Bootstrap, Angular Material `,
		},
		{
			icon: 'nodejs',
			style: 'service',
			title: 'Node.js',
			description: `Building Backend server with NestJS over ExpressJS with graphQL protocol or RESTful API`,
		},

		{
			icon: 'database',
			style: 'service',
			title: 'DataBase',
			description: `Modeling NoSQL database with Mongodb using mongoose or SQL database with PostgreSQL using typeORM`,
		},
	];

	educationDetails = [
		{
			title: 'Information Technology Engineering',
			date: '2015-2020',
			place: 'Al-Baath University',
		},
		{
			title: 'Master student in Web Science',
			date: '2020-current',
			place: 'Syrian Virtual University',
		},
	];

	courses = [
		'The Modern Angular Bootcamp',
		"NestJS: The Complete Developer's Guide",
		'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
		// 'The Complete JavaScript Course 2022: From Zero to Expert!',
		'Node.js, Express, MongoDB & More - The Complete Bootcamp 2021',
	];

	skills = {
		linux: 'linux',
		html5: 'html5',
		css3: 'css3',
		javascript: 'javascript',
		typescript: 'typescript',
		angular: 'angular',
		graphql: 'graphql',
		express: 'express',
		nestjs: 'nestjs',
		mongoDB: 'mongodb',
		postgreSQL: 'postgresql',
		sass: 'sass',
		ngxs: 'ngxs',
		nodejs: 'nodejs',
		bootstrap: 'bootstrap',
		passportjs: 'passportjs',
	};

	footer = 'Made with ❤️ and coding ';
}
