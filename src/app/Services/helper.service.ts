import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../Models/contact.model";


@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = "https://historyacoreapi20210430165528.azurewebsites.net/api/helper";

  sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}
