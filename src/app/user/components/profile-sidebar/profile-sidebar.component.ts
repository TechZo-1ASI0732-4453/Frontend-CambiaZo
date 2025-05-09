import { Component, input, InputSignal, output, OutputEmitterRef } from "@angular/core";
import { SHARED_IMPORTS } from "../../../shared";

@Component({
  selector: 'app-profile-sidebar',
  imports: [SHARED_IMPORTS],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.css'
})
export class ProfileSidebarComponent {

    name: InputSignal<string> = input.required<string>();
    selected: number = 0;
    outputSelected: OutputEmitterRef<number> = output<number>();


    iconNamesArr: any[] = [
      { name: 'Mis publicaciones', icon: 'container'},
      { name: 'Mis ofertas', icon: 'tags'},
      { name: 'CambioZ completados', icon: 'swap'},
      { name: 'Mis favoritos', icon: 'heart'},
      { name: 'Reseñas', icon: 'solution'},
      { name: 'Editar perfil', icon: 'idcard'},
      { name: 'Cerrar sesión', icon: 'logout'},
    ];

    onSelect = (index: number) => { 
      this.selected = index;
      this.outputSelected.emit(index); 
    }

}