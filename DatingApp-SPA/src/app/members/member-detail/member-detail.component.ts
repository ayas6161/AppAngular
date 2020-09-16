import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions,NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    } );

    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }];

    this.galleryImages = this.getImages();
   
  }
  getImages(){
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small : photo.url,
        medium : photo.url,
        big : photo.url,
        description : photo.description
      });
    }
    return imageUrls;

  }



  // loadUser(){

  //   this.userService.getUser(+this.router.snapshot.params['id']).subscribe(user => {
  //     this.user = user;
  //   }, error => this.alertify.error(error) );


  // }

}
