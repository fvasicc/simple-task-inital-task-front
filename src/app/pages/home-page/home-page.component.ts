import { Component, OnInit } from '@angular/core';
import { DentistService } from 'src/app/services/dentist.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public key: string = ""

  constructor(private dentistService: DentistService) { }

  ngOnInit(): void {
  }

  checkDentist() {
    this.dentistService.checkDentist(this.key).subscribe(
      resp => {
        localStorage.setItem("dentist", "dentistLogged")
      },
      err => {
        alert(err.error)
      }
    ) 
  }

  isDentistLogged() {
    return this.dentistService.isDentistLogged();
  }

}
