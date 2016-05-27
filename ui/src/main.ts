import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ChatPracticeUiAppComponent, environment } from './app/';
import { ChatComponent } from './app/chat';

if (environment.production) {
  enableProdMode();
}

bootstrap(ChatPracticeUiAppComponent);