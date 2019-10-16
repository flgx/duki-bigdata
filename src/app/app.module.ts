import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatButtonModule, MatGridListModule,MatMenuModule,MatToolbarModule,MatSidenavModule,MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { SafePipe } from './safe.pipe';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    HomeComponent,
    SafePipe,
    EscapeHtmlPipe
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    OrderModule,
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyCKBNJhkbhAFnK8e6-k8EqqrYYoJ3pgNoI",
    authDomain: "duki-2b3fc.firebaseapp.com",
    databaseURL: "https://duki-2b3fc.firebaseio.com",
    projectId: "duki-2b3fc",
    storageBucket: "duki-2b3fc.appspot.com",
    messagingSenderId: "420525468793",
    appId: "1:420525468793:web:94bb0700922e353234b8a8",
    measurementId: "G-0EMSXG5JGF"
  }),
    AngularFireDatabaseModule,
    MatCardModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [FirebaseService, EditUserResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
