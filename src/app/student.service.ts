import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/api/v1/student/add', studentData);
  }

  public getStudents() {
    return this.http.get(this.API + '/allStudents');
  }

  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/delete?id=' + id);
  }

  public updateStudents(student: any) {
    return this.http.put(this.API + '/update', student);
  }
}
