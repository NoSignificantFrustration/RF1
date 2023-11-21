import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'environment/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/home/search/search.component';
import { TagsComponent } from './pages/home/tags/tags.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './pages/admin/admin.component';
import {
  ConfirmDialog,
  ProductsComponent,
} from './pages/admin/products/products.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogConfig } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    AdminComponent,
    ProductsComponent,
    CustomerComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ConfirmDialog,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
