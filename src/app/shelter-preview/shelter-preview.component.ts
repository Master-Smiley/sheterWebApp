import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { Shelter } from '../models/shelter.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelter-preview',
  templateUrl: './shelter-preview.component.html',
  styleUrls: ['./shelter-preview.component.css']
})
export class ShelterPreviewComponent implements OnInit {

  @Input() shelters: Shelter[];
  gender: string;
  constructor(public authService: AuthService) {
    this.gender = sessionStorage.getItem('gender');
  }

  ngOnInit() {
    console.log(this.gender);
  }

}
