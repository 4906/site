import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = '4906.org';
  socials = [
    {link:'https://www.youtube.com/channel/UCH5mD-d7Hk-TdLa_1an76-A',name:'YouTube'},
    {link:'https://www.twitch.tv/sed4906h',name:'Twitch'},
    {link:'https://discord.gg/qSZzfgHaSP',name:'Discord'},
    {link:'https://app.revolt.chat/invite/gYxz1mzX',name:'Revolt'},
    {link:'https://sed4906.tumblr.com/',name:'Tumblr'},
    {link:'https://twitter.com/sed4906',name:'Twitter'},
    {link:'https://www.instagram.com/sed4906h/',name:'Instagram'},
    {link:'https://reddit.com/u/sed4906h',name:'Reddit'},
    {link:'https://github.com/SED4906',name:'Github'},
    {link:'https://steamcommunity.com/id/sed4906/',name:'Steam'},
    {link:'https://tf2maps.net/members/sed4906.33880/',name:'TF2Maps'},];
}