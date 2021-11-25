import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.component.html',
  styleUrls: ['./home-funcionario.component.css']
})
export class HomeFuncionarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(["app-home-funcionario"]);
  }

}
