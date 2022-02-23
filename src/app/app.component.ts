import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { photos } from './types/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rovers-app';

  defaultValue = '(Select)';
  roverPhotos : photos[] = [];

  constructor(private service:ApiService){}

  selectRover(name: any) {
    
    //console.log(name);

    let option = name.target.value;


    if (option === this.defaultValue) return;
    
    this.service.getRoverData(name.target.value)
      .subscribe(
        resp => { this.roverPhotos = resp },
        (err) => { 
          Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      );
      
    //console.log(name.target.value);
    
  }
}
