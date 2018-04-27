import { Shelter } from '../models/shelter.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelter-preview',
  templateUrl: './shelter-preview.component.html',
  styleUrls: ['./shelter-preview.component.css']
})
export class ShelterPreviewComponent implements OnInit {

  @Input() shelter: Shelter;
  constructor() { }

  ngOnInit() {
  }

}
