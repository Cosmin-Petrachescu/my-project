import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesDetailsPlatformeComponent } from './components/pages/services-details-platforme/services-details-platforme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    TestimonialsComponent,
    GalleryComponent,
    FaqComponent,
    SignInComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ComingSoonComponent,
    ErrorComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    ContactComponent,
    ServicesDetailsPlatformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
