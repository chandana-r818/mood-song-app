import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedMood: string = '';

  songs = [
    {
      mood: 'Happy',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://via.placeholder.com/250x180?text=Happy+Song'
    },
    {
      mood: 'Happy',
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'https://via.placeholder.com/250x180?text=Happy+Song'
    },
    {
      mood: 'Sad',
      title: 'Someone Like You',
      artist: 'Adele',
      image: 'https://via.placeholder.com/250x180?text=Sad+Song'
    },
    {
      mood: 'Sad',
      title: 'All Too Well',
      artist: 'Taylor Swift',
      image: 'https://via.placeholder.com/250x180?text=Sad+Song'
    },
    {
      mood: 'Chill',
      title: 'Sunflower',
      artist: 'Post Malone',
      image: 'https://via.placeholder.com/250x180?text=Chill+Song'
    },
    {
      mood: 'Chill',
      title: 'Night Changes',
      artist: 'One Direction',
      image: 'https://via.placeholder.com/250x180?text=Chill+Song'
    },
    {
      mood: 'Energetic',
      title: 'Titanium',
      artist: 'David Guetta',
      image: 'https://via.placeholder.com/250x180?text=Energetic+Song'
    },
    {
      mood: 'Energetic',
      title: 'Can’t Hold Us',
      artist: 'Macklemore',
      image: 'https://via.placeholder.com/250x180?text=Energetic+Song'
    }
  ];

  selectMood(mood: string) {
    this.selectedMood = mood;
  }

  get filteredSongs() {
    return this.songs.filter(song => song.mood === this.selectedMood);
  }
}