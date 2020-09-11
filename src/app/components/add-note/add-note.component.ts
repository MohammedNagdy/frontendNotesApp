import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
	@Output() addNote: EventEmitter<any> = new EventEmitter();

	note: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  	const note = {
  		note: this.note
  	}

  	this.addNote.emit(note);
  	this.note = '';
  }


}
