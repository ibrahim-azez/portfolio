import { Component, Input, OnInit } from '@angular/core';
import { IService } from '../core/model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  @Input() serviceInfo!: IService;

  constructor() {}
}
