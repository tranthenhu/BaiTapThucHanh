import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cung: string;
  public idCung: number;
  public congiapForm: FormGroup;
  constructor(
  
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  

    this.congiapForm = this.formBuilder.group({
      day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required, Validators.min(1), Validators.max(12)]]
    });
  }

  check() {

    switch (this.congiapForm.value.month) {
      case 1: {
        this.congiapForm.value.day < 20 ? 
        [this.cung = "Ma Kết", this.idCung = 11]:[ this.cung = "Bảo Bình", this.idCung = 12]
        break;
      } case 2: {
        this.congiapForm.value.day < 19 ? 
        [this.cung = "Bảo Bình ", this.idCung = 12] : [this.cung = "Song Ngư", this.idCung = 1]
        break;
      } case 3: {
        this.congiapForm.value.day < 21 ?
        [ this.cung = "Song Ngư", this.idCung = 1] :[ this.cung = "Bạch Dương ", this.idCung = 2]
        break;
      } case 4: {
        this.congiapForm.value.day < 20 ?
        [ this.cung = "Bạch Dương", this.idCung = 2] : [this.cung = "Kim Ngưu", this.idCung = 3]
        break;
      } case 5: {
        this.congiapForm.value.day < 21 ?
         [this.cung = "Kim Ngưu", this.idCung = 3] : [this.cung = "Song Tử", this.idCung = 4]
        break;
      } case 6: {
        this.congiapForm.value.day < 22 ? 
        [this.cung = "Song Tử", this.idCung = 4] : [this.cung = "Cự Giải", this.idCung = 5]
        break;
      } case 7: {
        this.congiapForm.value.day < 23 ? 
        [this.cung = "Cự Giải", this.idCung = 5] : [this.cung = "Sư Tử", this.idCung = 6]
        break;
      } case 8: {
        this.congiapForm.value.day < 23 ? 
        [this.cung = "Sư Tử", this.idCung = 6] : [this.cung = "Xử Nữ", this.idCung = 7]
        break;
      } case 9: {
        this.congiapForm.value.day < 23 ? 
        [this.cung = "Xử Nữ", this.idCung = 7] : [this.cung = "Thiên Bình ", this.idCung = 8]
        break;
      } case 10: {
        this.congiapForm.value.day < 23 ? 
        [this.cung = "Thiên Bình", this.idCung = 8] : [this.cung = " Hổ Cáp", this.idCung = 9]
        break;
      } case 11: {
        this.congiapForm.value.day < 22 ? 
        [this.cung = "Hổ Cáp", this.idCung = 9] : [this.cung = "Nhân Mã", this.idCung = 10]
        break;
      } case 12: {
        this.congiapForm.value.day < 22 ? 
        [this.cung = "Nhân Mã", this.idCung = 10] : [this.cung = "Ma Kết ", this.idCung = 11]
        break;
      }
      default: {
        this.cung = "ngày tháng sai"
        break;
      }
    }
  }
}
