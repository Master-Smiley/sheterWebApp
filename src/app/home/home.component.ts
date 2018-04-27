import { User } from '../models/user.model';
import { Shelter } from '../models/shelter.model';
import { AuthService } from '../auth.service';
import { ShelterService } from '../shelter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shelters: Shelter[];
  constructor(public shelterService: ShelterService, public authService: AuthService) { }

  ngOnInit() {
    this.shelters = this.shelterService.shelters;
    console.log(this.shelters);
  }

}
