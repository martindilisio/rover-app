import { Component, Input, OnInit } from '@angular/core';
import { photos } from 'src/app/types/interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() data: photos;

  constructor() { }

  ngOnInit(): void {
    
  }

}
