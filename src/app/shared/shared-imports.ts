import { AsyncPipe, JsonPipe, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NzSelectModule} from 'ng-zorro-antd/select';

import { SHARED_ZORRO_MODULES } from './shared-zorro';

export const SHARED_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  NzSelectModule,
  RouterOutlet,
  NgTemplateOutlet,
  NgClass,
  NgStyle,
  JsonPipe,
  AsyncPipe,
  ...SHARED_ZORRO_MODULES,
];
