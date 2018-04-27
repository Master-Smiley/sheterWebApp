import { Shelter } from './models/shelter.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShelterService {

  shelters: Shelter[];
  constructor() {
    this.shelters = [new Shelter('My Sister\'s House', 'Atlanta, GA', "https://www.google.com/maps/dir/33.7710362,-84.3915441/Atlanta+Mission:+My+Sister's+House,+921+Howell+Mill+Rd+NW,+Atlanta,+GA+30318/@33.7737703,-84.4029409,16z/data=!3m1!4b1!4m17!1m6!3m5!1s0x88f5049316eb47b3:0x516a11557fddb97a!2sAtlanta+Mission:+My+Sister's+House!8m2!3d33.780264!4d-84.410137!4m9!1m1!4e1!1m5!1m1!1s0x88f5049316eb47b3:0x516a11557fddb97a!2m2!1d-84.410137!2d33.780264!3e3", 
    'Female', 'http://www.my-sisters-house.org/wp-content/uploads/2015/02/3c.jpg', 'Located in Atlanta, Georgia, My Sister’s House is an overnight homeless shelter that accommodates both women and children. Any woman or mother experiencing homelessness in or around the Atlanta area has help available to them at My Sister’s House.'),
    new Shelter('The Atlanta Day Center for Women & Children', 'Atlanta, GA',
    "https://www.google.com/maps/place/Atlanta+Day+Shelter+for+Women+and+Children/@33.7753202,-84.3909989,15z/data=!4m8!1m2!2m1!1sAtlanta+Day+Care+for+women+and+children!3m4!1s0x88f504eda86b584f:0xaad0f2b498eb1d58!8m2!3d33.7848894!4d-84.4087713", 'Female',
    'https://www.womenshelters.org/gallery/581_genesis-shelter-inc_iss.jpg', ' The Atlanta Day Shelter for Women and Children provides a variety of services, including childcare, showers, laundry, lunch, MARTA cards for medical appointments, medical care, life-skills classes, recreational opportunities'),
    new Shelter('The Shepherd\'s Inn', 'Atlanta, GA', "https://www.google.com/maps/place/Atlanta+Mission:+The+Shepherd's+Inn/@33.764893,-84.3947697,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5047c3cd07a8b:0x8f3303778ba469e7!8m2!3d33.7648728!4d-84.3922197",
    "Male", 'https://www.homelessshelterdirectory.org/gallery/2475__pgr.jpg', 'The Shepherd’s Inn, a sanctuary for men in Atlanta who are experiencing homelessness, is able to accommodate up to 450 men at any given time.'),
    new Shelter('Fuqua Hall', 'Atlanta, GA', "https://www.google.com/maps/place/Atlanta+Mission:+Fuqua+Hall/@33.76515,-84.3944617,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5047c142c9d11:0xa8296a42ba9ee658!8m2!3d33.76515!4d-84.392273",
    'Male', 'http://assets.nydailynews.com/polopoly_fs/1.2600205.1460588791!/img/httpImage/image.jpg_gen/derivatives/article_1200/homeless14n-4-web.jpg',
    'The Atlanta Mission is a transitional home that serves men on their way to self-sufficiency.'),
    new Shelter('Eden Village', 'Atlanta, GA', "https://www.google.com/maps/place/1300+Joseph+E.+Boone+Blvd+NW,+Atlanta,+GA+30314/@33.7623158,-84.4324183,17z/data=!3m1!4b1!4m5!3m4!1s0x88f504a9b2d9aa59:0xf8ed610d2a5f275e!8m2!3d33.7623158!4d-84.4302296",
    "Female", 'https://movinginfaith.files.wordpress.com/2014/10/14-may-6765_web.jpg', 'Eden Village is the “One-Stop Shop for Women in Crisis.” The facility accommodates residents for up to 180 days if needed. In addition to housing, Eden Village offers medical, vision, dental, and mental health care through Mercy Care.'),
    new Shelter('Hope Atlanta', 'Atlanta, GA', "https://www.google.com/maps/place/HOPE+Atlanta/@33.754954,-84.3918417,17z/data=!3m1!4b1!4m5!3m4!1s0x88f50380d745a087:0x9e4831cc844b118f!8m2!3d33.754954!4d-84.389653",
    'Male', 'https://cdngeneral.rentcafe.com/dmslivecafe/3/20335/CommunityBuildingExteriors3(1).jpg?crop=(0,8.333333333333343,300,175)&cropxunits=300&cropyunits=200&quality=85&scale=both&',
    'HOPE Atlanta offers an array of services including shelter and other emergency services and permanent supportive housing')];
  }

}
