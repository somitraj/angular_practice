import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core'; 
import {FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-edit-dialogue',
  templateUrl: './edit-dialogue.component.html',
  styleUrls: ['./edit-dialogue.component.css']
})
export class EditDialogueComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public login: any, public apiService: ApiService) { }

  formControl = new FormControl('', [
    Validators.required 
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void { 
    this.apiService.updateData(this.login);
  }
 

}
