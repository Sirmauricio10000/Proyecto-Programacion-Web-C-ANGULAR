import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-funcionario',
  templateUrl: './nav-funcionario.component.html',
  styleUrls: ['./nav-funcionario.component.css']
})
export class NavFuncionarioComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}