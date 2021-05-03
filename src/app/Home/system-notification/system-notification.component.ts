import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Notification } from 'rxjs';
import { SystemNotificationService } from 'src/app/Service/system-notification.service';

export interface Notifications {
  message: string;
}

export interface Messages {
  messageAr: string;
  messageEn: string;
}

@Component({
  selector: 'app-system-notification',
  templateUrl: './system-notification.component.html',
  styleUrls: ['./system-notification.component.scss']
})
export class SystemNotificationComponent implements OnInit {

  constructor(private notificationService: SystemNotificationService,  private snackBar: MatSnackBar) { }

  ngOnInit() {

  }
  isShowErrorMessageAr: boolean = false;
  isShowErrorMessageEn: boolean = false;
  isMessageNotEntered: boolean = false;
  //messages:Notifications;
  formControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(125)
  ]);

  charLengthAr(value: string){
if(value.length > 125){
  console.log("Greater that 125")
  this.isShowErrorMessageAr = true;
  //this.getErrorMessageEn();
 } else if(value.length <= 125) {
   this.isShowErrorMessageAr = false;
 }else{
  //this.isShowErrorMessage = true;
 }
}

charLengthEn(value: string){
  if(value.length > 125){
    console.log("Greater that 125")
    this.isShowErrorMessageEn = true;
    //this.getErrorMessageEn();
   } else if(value.length <= 125) {
     this.isShowErrorMessageEn = false;
   }else{
    //this.isShowErrorMessage = true;
   }
  }

  messageNotEntered(){
    this.snackBar.open("Please enter the notification message", "", {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snack-bar']
    });
  }

  messageValidation(){
    this.snackBar.open("One or more validation error is occured", "", {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snack-bar']
    });
  }
  wrap_dir(dir, str) {
    if (dir === 'rtl') return '\u200F' + str ;
    return '\u202A' + str + '\u202C';
}


  SendNotification(data: any){
    debugger;
    if(data.messageAr == "" && data.messageEn == ""){
      return this.messageNotEntered();
    }

    if(data.messageAr.length > 125 || data.messageEn.length > 125){
      return this.messageValidation();
    }

    //this.isShowErrorMessageAr = false;
    let notificationMessage = (data.messageAr != ""  && data.messageEn != "") ? data.messageAr + "\n"+  data.messageEn :
                  (data.messageAr != ""  && data.messageEn == "") ? data.messageAr :
                  (data.messageAr == ""  && data.messageEn != "") ? data.messageEn : "";                                             "";
    //var txt =  "Hi" + "\u200F" + "Sathish" + "\u200F"
                  //notificationMessage = notificationMessage.replace(/ /g,"\u200E")
                  // var text = notificationMessage.split(" ");
                  // for(let i = 0; i< text.length; i++){
                  //   var txt = this.wrap_dir('rtl', text[i]);
                  //   txt  = txt + ;
                  // }
    //               let a = 'Please ';
    //               let b = 'note ';
    //               let c = 'that ';
    //               let d = 'we ';
    //               let e = 'will ';
    //               let f = 'be ';
    //               let g = 'performing ';
    //               let h = 'important ';
    //               let i = 'server ';
    //               let j = 'maintenance ';
    //               let k = 'in ';
    //               let l = 'a ';
    //               let m = 'few ';
    //               let n = 'minutes, ';
    //               let o = 'during ';
    //               let p = 'which ';
    //               let q = 'time ';
    //               let r = 'the ';
    //               let s = 'server ';
    //               let t = 'will';
    //               let u = 'be ';

    //  var txt = this.wrap_dir('rtl', a) + this.wrap_dir('rtl', b) + this.wrap_dir('rtl', c) + this.wrap_dir('rtl', d) + 
    //  this.wrap_dir('rtl', e) + this.wrap_dir('rtl', f) + this.wrap_dir('rtl', g) + this.wrap_dir('rtl', h) + this.wrap_dir('rtl', i) + 
    //  this.wrap_dir('rtl', j) + this.wrap_dir('rtl', k) ;             
//let txt = this.wrap_dir('rtl', notificationMessage)





                  
    let messages = {
      message : notificationMessage
    }
        
    
    this.notificationService.sendNotification(messages).subscribe(res => {
      if(res){
        this.snackBar.open("Notification sent successfully !!", "Done", {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-bar']
        });
        console.log("Notification sent");
      } else{
        this.snackBar.open("Failed !!", "", {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-bar']
        });
      }
    });
  }

}
