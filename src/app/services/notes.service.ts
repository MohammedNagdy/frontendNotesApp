import { Injectable } from '@angular/core';
import { Notes } from '../models/NotesModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');

@Injectable({
  providedIn: 'root'
})
export class NotesService {
	notes: Notes[]

	noteurl :string = "https://notesapplica.herokuapp.com/api/note/";

  constructor(private http: HttpClient) { }


  // get the notes from the database
  getNotes() : Observable<Notes[]>{
  	return this.http.get<Notes[]>(this.noteurl);
  }

  // delete the note
  deleteNote(n:Notes):Observable<Notes>{
  	const url = this.noteurl+n.id+'/';
  	return this.http.delete<Notes>(url, {headers:headers});

  }


   // add note 
   addNote(note):Observable<any>{
     return this.http.post(this.noteurl, note, {headers: headers});
   }


  // update the notes to the database
  noteUpdated(message):Observable<any>{
    console.log(message.id);
  	const url = this.noteurl+message.id+'/';
  	return this.http.put(url, message, {headers:headers});
  }
}

