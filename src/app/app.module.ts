import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './components/detalles/detalles.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryDataService } from './services/MemoryData.service';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AgenciasComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService,{ dataEncapsulation:false}),
    AppRoutingModule,[NgbModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
