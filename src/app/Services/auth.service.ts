import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  IsAuthenticated(email: string, password: string) {
    let adminUser = { email: email, password: password };

    return this.httpClient.post<any>(
      'https://historyacoreapi20210430165528.azurewebsites.net/api/Auth/IsAuthenticated',
      adminUser
    );
  }
}
