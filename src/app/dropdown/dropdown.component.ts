import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/specialty.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  public specialties: Specialty[];
  public selectedSpecialties: Specialty[];

  constructor() {
    this.specialties = [
      new Specialty(1, '1'),
      new Specialty(2, 'Libe 2'),
      new Specialty(3, 'Libel 3'),
      new Specialty(4, 'Libelle 4'),
      new Specialty(5, 'LibelleLibelleLibelle 5'),
      new Specialty(6, 'Libelle Libelle 6'),
      new Specialty(7, 'Libelle LibelleLibelleLibelle 7'),
      new Specialty(8, 'GRIP - CCFC Très haut'),
      new Specialty(9, 'Libelle Libelle Libelle Libelle Libelle Libelle 9'),
    ];

    this.selectedSpecialties = this.specialties;
    }

  ngOnInit() { 
  }

} 