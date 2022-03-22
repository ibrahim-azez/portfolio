import { IService } from './core/model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	displayType: string = 'transformHundredRight';
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
		hrStatus: true,
	};

	serviceList: IService[] = [
		{
			icon: 'frontend',
			style: 'service',
			title: 'Frontend',
			description: `Designing and developing responsive webapp beautiful lovely and attractive with Angular SCSS and more`,
			hrStatus: false,
		},
		{
			icon: 'backend',
			style: 'service',
			title: 'Backend',
			description: `Building server easy to maintain with NodeJS Express NestJS using graphQL RESTful API `,
			hrStatus: false,
		},
		{
			icon: 'database',
			style: 'service',
			title: 'DataBase',
			description: `Modeling NoSQL with Mongodb or SQL with PostgreSQL`,
			hrStatus: false,
		},
	];

	// personalDetails = {
	//   email: 'ibrahimazez@protonamail.com',
	// };

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
		javaScript: 'javascript',
		typeScript: 'typescript',
		angular: 'angular',
		graphQL: 'graphql',
		express: 'express',
		nestJS: 'nestjs',
		mongoDB: 'mongodb',
		postgreSQL: 'postgresql',
	};

	footer = 'All Rights is reserved to Ibrahim Azez';
}
