import {Component, inject} from '@angular/core';
import {SHARED_IMPORTS} from '../../../shared';
import {PublishForm} from '../../forms/publishForm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import {Observable, Observer} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-publish-page',
  imports: [SHARED_IMPORTS, NzUploadModule],
  providers: [PublishForm],
  templateUrl: './publish-page.component.html',
  styleUrl: './publish-page.component.css'
})
export class PublishPageComponent {

  public readonly publishForm: PublishForm = inject(PublishForm);


  protected readonly PublishForm = PublishForm;


  loading = false;
  avatarUrl?: string;

  constructor(private messageService: NzMessageService) {}

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.messageService.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.messageService.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.messageService.error('Network error');
        this.loading = false;
        break;
    }
  }
}
