import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  subir(nombre: string){
    this.service.createCategorias(nombre).subscribe(data=>{
      alert('Se registro correctamente');
      this.router.navigate(['listar']);
    });
  }

  ngOnInit() {

  }

}
