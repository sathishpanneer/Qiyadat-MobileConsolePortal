import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SystemNotificationService } from 'src/app/Service/system-notification.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-cv-parsing',
  templateUrl: './cv-parsing.component.html',
  styleUrls: ['./cv-parsing.component.scss']
})
export class CvParsingComponent implements OnInit {

  constructor(private cvParsingService: SystemNotificationService, private http: HttpClient,
              private spinnerService: NgxSpinnerService, 
              private DomSanitizer: DomSanitizer) { }
CVResponse: any ;
imageData: any;
srcData: SafeResourceUrl;
skill: any;
isParsed: boolean = false;
isImageAvailable: boolean = false;
  ngOnInit() {
    // this.http.get("assets/CVParsedDataResponse.json").subscribe((data: any) =>{
    //   debugger
    //       console.log(data);
    //       this.spinnerService.hide();
    //       //let val = JSON.stringify(data.ResumeParserData);
    //       //let finalData = val.replace(/[|[]|\\|{|}|"|]/g, "");
    //       //let final = finalData.replace(/,/g,"<br><br>")
    //       //let final2 = final.replace(/:/g,"&nbsp:&nbsp")
    //       //let final = finalData.toString();
    //       this.CVResponse = data.ResumeParserData;
    //       let skill = JSON.stringify(data.ResumeParserData.SkillBlock).replace(/["\r]/g,"");

    //       this.skill = skill.replace(/,/g,",<br>")
    //     });
  }
  formControl = new FormControl('', [
    Validators.required
  ]);
   
    onFileChange(event: any) {
      this.spinnerService.show();
      let fi = event.srcElement;
      if (fi.files && fi.files[0]) {
          let fileToUpload = fi.files[0];
  
          let formData:FormData = new FormData();
          formData.append("file", fileToUpload, fileToUpload.name);

this.cvParsingService.CVParsing(formData).subscribe( (data: any)  => {
  //this.http.get("assets/ImageParsing.json").subscribe((data: any) =>{
        if(data){
          debugger
          console.log(data);
          this.spinnerService.hide();
          //let val = JSON.stringify(data.ResumeParserData);
          //let finalData = val.replace(/[|[]|\\|{|}|"|]/g, "");
          //let final = finalData.replace(/,/g,"<br><br>")
          //let final2 = final.replace(/:/g,"&nbsp:&nbsp")
          //let final = finalData.toString();
          this.isParsed = true;
          this.CVResponse = data.ResumeParserData;
          data.ResumeParserData.CandidateImage.CandidateImageData != "" ? this.isImageAvailable = true : this.isImageAvailable = false;
          this.imageData = "data:image/" + data.ResumeParserData.CandidateImage.CandidateImageFormat +";base64," + data.ResumeParserData.CandidateImage.CandidateImageData;
          this.srcData = this.DomSanitizer.bypassSecurityTrustUrl(this.imageData);
        }
      });

// this.http.get("assets/CVParsedDataResponse.json").subscribe((data: any) =>{
//   debugger
//       console.log(data);
//       this.spinnerService.hide();
//       //let val = JSON.stringify(data.ResumeParserData);
//       //let finalData = val.replace(/[|[]|\\|{|}|"|]/g, "");
//       //let final = finalData.replace(/,/g,"<br><br>")
//       //let final2 = final.replace(/:/g,"&nbsp:&nbsp")
//       //let final = finalData.toString();
//       this.CVResponse = data.ResumeParserData;
//     });
  }

  }
  
}
