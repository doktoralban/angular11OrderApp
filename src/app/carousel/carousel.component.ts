import { Component, OnInit } from '@angular/core';
import {AlertifyjsService} from '../Services/alertifyjs.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private alertify: AlertifyjsService) { }

  ngOnInit(): void {
  }

  msgSuccess(message: string)
  {
    this.alertify.success(message);
  }
  msgWarning(message: string)
  {
    this.alertify.warning(message);
  }
  msgError(message: string)
  {
    this.alertify.error(message);
  }
  prompt(title: string, message: string, defvalue: string)
  {    
   this.alertify.prompt(title,message,defvalue);

  }
  confirmX(message: string)
  {
    this.alertify.confirm(message);
  }


}
