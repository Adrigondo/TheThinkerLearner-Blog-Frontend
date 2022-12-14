import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MarkdownModule } from 'ngx-markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsCreateComponent } from './components/news/news-create/news-create.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';

import { ImageContainerComponent } from './components/atoms/image-container/image-container.component';

import { NewsCardComponent } from './components/molecules/news-card/news-card.component';
import { ImageInputComponent } from './components/molecules/image-input/image-input.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDropzoneModule,
    MarkdownModule.forRoot({}),
    LMarkdownEditorModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    NewsCreateComponent,
    NewsDetailComponent,

    //ATOMS
    ImageContainerComponent,

    //MOLECULES
    NewsCardComponent,
    ImageInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
