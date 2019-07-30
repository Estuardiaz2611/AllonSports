import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-abdomen',
  templateUrl: 'abdomen.page.html',
  styleUrls: ['abdomen.page.scss']
})

export class AbdomenPage {
  constructor(
    private _sanitizer: DomSanitizer
){}
getVideoIframe(url) {
  var video, results;

  if (url === null) {
      return '';
  }
  results = url.match('[\\?&]v=([^&#]*)');
  video   = (results === null) ? url : results[1];

  return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}