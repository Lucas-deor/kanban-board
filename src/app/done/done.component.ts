import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
