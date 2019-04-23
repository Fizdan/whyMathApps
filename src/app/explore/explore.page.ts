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


  ngOnInit() {   this.myId = this.activatedRoute.snapshot.paramMap.get('myid');

  }

  openMyVideo(){
    this.youtube.openVideo('dQw4w9WgXcQ');
  }

}
