import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  myId = null;

  constructor(private activatedRoute: ActivatedRoute, private youtube: YoutubeVideoPlayer) { }


  ngOnInit() {this.myId = this.activatedRoute.snapshot.paramMap.get('myid');

  }

  phytagoras(){
    this.youtube.openVideo('yliw5IFXsSg');
  }

  babilonia(){
    this.youtube.openVideo('5GmHV4GsLOo');
  }

  sejarahangka(){
    this.youtube.openVideo('SBu7sLYaK2g');
  }

  pascal(){
    this.youtube.openVideo('XMriWTvPXHI');
  }

  himathsejarah(){
    this.youtube.openVideo('ueI8Cg1cQs8');
  }
  

}
