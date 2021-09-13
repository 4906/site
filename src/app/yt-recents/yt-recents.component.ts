import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-recents',
  templateUrl: './yt-recents.component.html',
  styleUrls: ['./yt-recents.component.less'],
  inputs: ['cid', 'vnum']
})
export class YtRecentsComponent implements OnInit {
  @Input() cid: string = '';
  @Input() vnum: number = 0;
  ytvid: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

    this.http.get(reqURL + this.cid).subscribe(
      (data)=>{
        var link = JSON.parse(JSON.stringify(data)).items[this.vnum].link
        var id = link.substr(link.indexOf("=") + 1);
        this.ytvid = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + id + "?controls=0&autoplay=1");
      }
    );
  }

}
