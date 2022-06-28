import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat Tree',
      username: 'nature',
      content:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsamdicta voluptate necessitatibus autem porro delectus doloremque recusandae accusantium eos. ',
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'BMX Biking',
      username: 'bikelover',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsamdicta voluptate necessitatibus autem porro delectus doloremque recusandae accusantium eos.',
    },
    {
      imageUrl: 'assets/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'mountainlove',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsamdicta voluptate necessitatibus autem porro delectus doloremque recusandae accusantium eos. ',
    },
  ];
}
