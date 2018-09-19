import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PhotosComponent } from './photos/photos.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PhotosComponent,
    BlogComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
