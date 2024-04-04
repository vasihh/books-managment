import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  isDarkMode: boolean = false;
  managerName: string = '';
  managersCount: number = 0;



  /* Tried to understand lots from stackoverflow*/



  constructor(private firestore: Firestore) {
    this.countManagers();
  }

  async countManagers() {
    const managersCollection = collection(this.firestore, 'managers');
    const snapshot = await getDocs(managersCollection);
    this.managersCount = snapshot.docs.length;
  }

  async addManager() {
    if (this.managersCount >= 2) {
      alert("Cannot add more managers");
      this.managerName = '';
      return;
    }

    const managersCollection = collection(this.firestore, 'managers');
    await addDoc(managersCollection, { manager_name: this.managerName });
    this.managerName = this.managerName;
    this.countManagers();
    this.managerName = '';
  }


  DarkMode() {
    if (this.isDarkMode == true) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#FFD000';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }
}
