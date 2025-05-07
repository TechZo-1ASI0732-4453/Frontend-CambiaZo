import { AsyncPipe, JsonPipe, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { SHARED_ZORRO_MODULES } from './shared-zorro';

export const SHARED_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  RouterOutlet,
  NgTemplateOutlet,
  NgClass,
  NgStyle,
  JsonPipe,
  AsyncPipe,
  ...SHARED_ZORRO_MODULES,
];
