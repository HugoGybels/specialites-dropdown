import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/specialty.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {


  public specialties: Specialty[];
  public selectedSpecialties: Specialty[];

  constructor() {
    this.specialties = [
      new Specialty(1, 'Libelle 1'),
      new Specialty(2, 'Libelle 2'),
      new Specialty(3, 'Libelle 3'),
      new Specialty(4, 'Libelle 4')
    ];
    }

  ngOnInit() { 
  }

}