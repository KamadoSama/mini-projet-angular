import { Component, OnInit } from '@angular/core';
import { IResidence } from '../shared/models/residence';
import { ResidenceListService } from '../shared/service/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent implements OnInit  {
  public residence$!:Observable<IResidence>

  constructor(
    private route: ActivatedRoute,
    private residenceListService: ResidenceListService,
    private router:  Router
  ){}

  ngOnInit(): void {
    const idString:any = this.route.snapshot.paramMap.get('id')
    const id = +idString
    this.residence$ = this.residenceListService.getResidenceById(id)
  }
  public backToList():void{
    this.router.navigate([''])
  }
}
