import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  categorias: Object[];

  constructor(private service: ServiceService, private router: Router) { 
    
  }

  ngOnInit() {
    this.service.getCategorias().subscribe(data => {this.categorias = data});
  }

}
