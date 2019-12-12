import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgDirective } from './img.directive';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './component/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    ImgDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
