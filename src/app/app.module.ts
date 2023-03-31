import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';
import { GlobalChatComponent } from './chat/global-chat/global-chat.component';
import { PrivateChatComponent } from './chat/private-chat/private-chat.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    ChatPageComponent,
    ChatHeaderComponent,
    ChatFooterComponent,
    GlobalChatComponent,
    PrivateChatComponent,
    ChatBodyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        CdkVirtualScrollViewport,
        MatToolbarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
