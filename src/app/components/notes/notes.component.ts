import { Component, OnInit } from '@angular/core';
import { Notes } from '../../models/NotesModel';
import { NotesService } from '../../services/notes.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

	notes: Notes[];

  constructor(private notesservice : NotesService) { }

  ngOnInit(): void {
  	this.notesservice.getNotes().subscribe( notes => {
  		this.notes = notes
  		}
  	)
  }

  

  deleteNote(note){
  	this.notes = this.notes.filter( t => t.id !== note.id);
  	this.notesservice.deleteNote(note).subscribe();

  }


  addNote(note){
    this.notesservice.addNote(note).subscribe(
        note => {
          this.notes.push(note);
        }
      )
  }


}
