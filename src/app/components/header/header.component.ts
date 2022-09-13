import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DentistService } from 'src/app/services/dentist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dentistService: DentistService) { }

  ngOnInit(): void {
  }

  isDentistLogged() {
    return this.dentistService.isDentistLogged();
  }

  logout() {
    this.dentistService.logout();
  }

}
