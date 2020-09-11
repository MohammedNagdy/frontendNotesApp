import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../../models/NotesModel';
import { NotesService } from '../../services/notes.service';





@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
	@Input() note: Notes;
	@Output() deleteNote: EventEmitter<Notes> = new EventEmitter();

  constructor(private notesservice:NotesService) { }

  ngOnInit(): void {
  	console.log("it works")
  }

  changed( message, inputValue){
    console.log("something happened!!!"+ inputValue.value);

    message.note = inputValue.value;
    // update the note in the database
    this.notesservice.noteUpdated(message).subscribe(
        message=> console.log(message)
      )
  }

  onDelete(message){
  	console.log("delete!!! " + message.id);
  	this.deleteNote.emit(message);

  }

}
