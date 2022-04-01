import { IService } from './core/model';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	displayType: string = 'transformHundredRight';

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
		description: `Focused IT Engineer, eager to new challenges to grow
    and further improve my IT skills. Have proven
    knowledge of MEAN Stack development with NestJS,
    database development with SQL Or NoSQL databases`,
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
			title: 'NodeJS',
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
			title: 'Information Technology Engineer',
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
		// 'Node.js, Express, MongoDB & More - The Complete Bootcamp 2021',
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
	};

	footer = 'Made with ❤️ and coding ';
}
