import { Component, OnInit } from '@angular/core';
import { ResidenceListService } from '../residence/shared/service/residence.service';
import { IResidence } from '../residence/shared/models/residence';



@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  public images:Array<string> = []
  constructor(private residenceListService: ResidenceListService){}

  ngOnInit(): void {
    this.residenceListService.getResidence()
    .subscribe((residences:IResidence[])=>{
      this.images = residences.map((residence)=>residence.imageUrl)
      console.log(this.images)
    })
  }

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}




