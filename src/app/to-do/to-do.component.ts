import { DoingComponent } from './../doing/doing.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEdit, faTrash, faArrowRight, faArrowLeft, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { Quadro } from '../models/quadro.model';
import { KanbanService } from '../services/kanban.service';




@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;

  // id!: number;

  editFormOpen: boolean = false;

  quadroForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null)
  })

  @Input() quadro!: Quadro;

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    // this.quadros = this.kanbanService.getQuadros();
  }

  onDeleteQuadro(){
    this.kanbanService.deleteQuadroFromServer(this.quadro.id).subscribe((p) => {
      this.kanbanService.quadroChanged.next(p)
    })
  }

  onEditQuadro(){
    this.editFormOpen = true;
  }

  updateQuadro(){
    this.kanbanService.updateQuadroFromServer(this.quadro.id, this.quadroForm.value).subscribe((p) => {
      this.kanbanService.quadroChanged.next(p);
    })
  }

  deleteForm() {
    this.editFormOpen = false;
  }

  // moverQuadroDireita() {
  //   this.kanbanService.createDoingOnServer(this.quadro.id, this.quadro.title, this.quadro.content).subscribe((p) =>{
  //     this.kanbanService.quadroChanged.next(p);
  //   })

  //   this.kanbanService.deleteQuadroFromServer(this.quadro.id).subscribe((p) => {
  //     this.kanbanService.quadroChanged.next(p);
  //   })
  // }
}
