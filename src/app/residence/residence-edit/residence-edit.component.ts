import { Component, OnInit } from '@angular/core';
import { IResidence } from '../shared/models/residence';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceListService } from '../shared/service/residence.service';

@Component({
  selector: 'app-residence-edit',
  templateUrl: './residence-edit.component.html',
  styleUrls: ['./residence-edit.component.css']
})
export class ResidenceEditComponent implements OnInit {
  public residence!:IResidence;
  public registerForm:any
  public pageTitle!:string
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private residenceListService: ResidenceListService
    ){

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      residenceName: ['', [Validators.required]],
      price: [null, [Validators.required]],
      description: ['', [Validators.required]],

    })

    this.route.paramMap.subscribe(params => {
      const residenceId = parseInt(params.get('id') as string,10)

      console.log(residenceId)
      if (residenceId == 0) {
        this.pageTitle = 'Créer une residence'
        this.registerForm.reset()
      } else {
        this.getSelectedResidence(residenceId)
      }
    })
  }

  public getSelectedResidence(id: number): void {
    this.residenceListService.getResidenceById(id).subscribe((residence: IResidence) => {
      this.displayResidence(residence)
    })
  }

  public displayResidence(residence: IResidence): void {

    this.residence = residence;

    this.pageTitle = `Modifier la residence ${this.residence.residenceName}`
    this.registerForm.patchValue({
      residenceName: this.residence.residenceName,
      price: this.residence.price,
      description: this.residence.description
    })

  }

  public saveData(): void {
    this.registerForm.updateValueAndValidity({
      onlySelf:true,
      emitEvent:true
    })
    if (this.registerForm.valid) {
      if (this.registerForm.dirty) {
        const residence: IResidence= {
          ...this.residence,
          ...this.registerForm.value
        }
        console.log("residence.id", residence)
        if (residence.id == undefined) {
          this.residenceListService.createHotel(residence).subscribe({
            next: () => this.saveCompleted()
          })
        } else {
          this.residenceListService.updateHotel(residence).subscribe({
            next: () => this.saveCompleted(),
            error: (err) => console.log(err)
          })
        }
      }
    }
  }

  public saveCompleted(): void {
    this.registerForm.reset()
    this.router.navigate([''])
  }

  public deleteHotel(): void {
    if (confirm(`Voulez-vous vraiment supprimer la residence ${this.residence.residenceName} ?`)) {
      this.residenceListService.deleteHotel(this.residence.id).subscribe(
        {
          next: () => this.saveCompleted()
        }
      )
    }
  }

}
