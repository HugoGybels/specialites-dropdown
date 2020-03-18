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
      new Specialty(1, 'Libelle 1'),
      new Specialty(2, 'Libelle 2'),
      new Specialty(3, 'Libelle 3'),
      new Specialty(4, 'Libelle 4'),
      new Specialty(5, 'Libelle 5'),
      new Specialty(6, 'Libelle 6'),
      new Specialty(7, 'Libelle 7'),
      new Specialty(8, 'Libelle 8'),
      new Specialty(9, 'Libelle 9'),
    ];

    this.selectedSpecialties = this.specialties;
    }

  ngOnInit() { 
  }

} 