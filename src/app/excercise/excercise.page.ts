import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.page.html',
  styleUrls: ['./excercise.page.scss'],
})
export class ExcercisePage implements OnInit {
  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questions: any;

constructor(public navCtrl: NavController, public dataService: DataService) { }

ngOnInit() {

  this.slides.lockSwipes(true);

  this.dataService.load().then((data) => {

      data.map((question) => {

          let originalOrder = question.answers;
          question.answers = this.randomizeAnswers(originalOrder);
          return question;

      });     

      this.questions = data;

  });

}

nextSlide(){
  this.slides.lockSwipes(false);
  this.slides.slideNext();
  this.slides.lockSwipes(true);
}

selectAnswer(answer, question){

  this.hasAnswered = true;
  answer.selected = true;
  question.flashCardFlipped = true;

  if(answer.correct){
      this.score++;
  }

  setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
  }, 500);
}

randomizeAnswers(rawAnswers: any[]): any[] {

  for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
  }

  return rawAnswers;

}

restartQuiz() {
  this.score = 0;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1, 1000);
  this.slides.lockSwipes(true);

}

}