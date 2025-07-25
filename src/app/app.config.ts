import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [

    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    FormsModule
   // provideBrowserGlobalErrorListeners(),
   // provideZoneChangeDetection({ eventCoalescing: true }),
    
  ]
};
