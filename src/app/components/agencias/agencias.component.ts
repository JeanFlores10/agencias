import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency';
import { AGENCY } from 'src/app/mock-agency';
import { AgenciaService } from 'src/app/services/agencia.service';
@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  agencias: Agency[] = [];
  agency = AGENCY;
  selectedAgencia?: Agency;
  constructor( private agenciaService: AgenciaService ) { }

  ngOnInit(): void {
    this.getAgencias();
  }
  
  onSelect(agencia: Agency): void {
    this.selectedAgencia = agencia;
  }

  getAgencias():void{
    this.agenciaService.getAgencias().subscribe(agencias=> this.agencias = agencias);
  }

}
