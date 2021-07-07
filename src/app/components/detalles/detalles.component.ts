import { Component, OnInit, Input } from '@angular/core';
import { Agency } from 'src/app/models/agency';
import { AgenciaService } from 'src/app/services/agencia.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() agencia?: Agency; 
  constructor(
    private agenciaService: AgenciaService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack():void{
    this.location.back();
  }

  save():void{
    if(this.agencia){
      this.agenciaService.updateAgencia(this.agencia).subscribe(() => this.goBack());
    }
  }

}
