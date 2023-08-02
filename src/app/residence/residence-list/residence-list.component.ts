import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IResidence } from '../shared/models/residence';
import { ResidenceListService } from '../shared/service/residence.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-residence-list',
  templateUrl: './residence-list.component.html',
  styleUrls: ['./residence-list.component.css']
})
export class ResidenceListComponent implements OnInit{
  public residence$!:Observable<IResidence[]>

  public title = "Liste résidence"
  constructor(private residenceListService: ResidenceListService){}
  ngOnInit(): void {
    AOS.init({
      duration: 1900,
      easing: 'ease',
      once: true
    });
    this.residence$ = this.residenceListService.getResidence()

  }

}
