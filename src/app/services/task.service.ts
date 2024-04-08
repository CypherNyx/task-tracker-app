/**
  * Retrieves a list of tasks from the server.
  * @returns An Observable that emits an array of Task objects.
  */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  // This method is used to delete a specific task from the server.
  deleteTask (task: Task): Observable<Task>{
    // Construct the URL for the API endpoint by appending the task's id to the base API URL.
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
    //The delete method of Angular's HttpClient is used to send the request. The <Task> generic indicates that the response from the API will be of type Task.
  }

  updateTaskReminder(task: Task | undefined): Observable<Task> {
    const url= `${this.apiUrl}/${task?.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
