import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
})
export class NamecardComponent implements OnInit {

 public cardName: string = "Professional Dev" ;
  public email: string="prodev@abc.xyz";
public phone: string="0123456789";

  constructor() { }

  ngOnInit() {
  }

}


