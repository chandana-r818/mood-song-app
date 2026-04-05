import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
  title: string;
  artist: string;
  mood: string;
  vibe: string;
  emoji: string;
  youtube: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mood-song-app';

  selectedMood: string = '';
  searchText: string = '';

  moods = [
    { name: 'Happy', emoji: '😊', color: 'happy' },
    { name: 'Sad', emoji: '🥺', color: 'sad' },
    { name: 'Chill', emoji: '😌', color: 'chill' },
    { name: 'Energetic', emoji: '⚡', color: 'energetic' },
    { name: 'Romantic', emoji: '💖', color: 'romantic' },
    { name: 'Focus', emoji: '🧠', color: 'focus' }
  ];

  songs: Song[] = [
    // Happy
    {
      title: 'Can’t Stop the Feeling',
      artist: 'Justin Timberlake',
      mood: 'Happy',
      vibe: 'Feel-good and cheerful vibes',
      emoji: '☀️',
      youtube: 'https://www.youtube.com/results?search_query=Can%27t+Stop+the+Feeling+Justin+Timberlake'
    },
    {
      title: 'Good Life',
      artist: 'OneRepublic',
      mood: 'Happy',
      vibe: 'Positive road trip energy',
      emoji: '🌈',
      youtube: 'https://www.youtube.com/results?search_query=Good+Life+OneRepublic'
    },
    {
      title: 'Best Day Of My Life',
      artist: 'American Authors',
      mood: 'Happy',
      vibe: 'Bright and uplifting mood',
      emoji: '✨',
      youtube: 'https://www.youtube.com/results?search_query=Best+Day+Of+My+Life+American+Authors'
    },

    // Sad
    {
      title: 'Someone Like You',
      artist: 'Adele',
      mood: 'Sad',
      vibe: 'Emotional and heartfelt',
      emoji: '🌧️',
      youtube: 'https://www.youtube.com/results?search_query=Someone+Like+You+Adele'
    },
    {
      title: 'Let Her Go',
      artist: 'Passenger',
      mood: 'Sad',
      vibe: 'Soft and reflective',
      emoji: '💔',
      youtube: 'https://www.youtube.com/results?search_query=Let+Her+Go+Passenger'
    },
    {
      title: 'Fix You',
      artist: 'Coldplay',
      mood: 'Sad',
      vibe: 'Comforting emotional track',
      emoji: '🕯️',
      youtube: 'https://www.youtube.com/results?search_query=Fix+You+Coldplay'
    },

    // Chill
    {
      title: 'Sunflower',
      artist: 'Post Malone & Swae Lee',
      mood: 'Chill',
      vibe: 'Smooth and relaxed mood',
      emoji: '🌻',
      youtube: 'https://www.youtube.com/results?search_query=Sunflower+Post+Malone+Swae+Lee'
    },
    {
      title: 'Golden Hour',
      artist: 'JVKE',
      mood: 'Chill',
      vibe: 'Dreamy and calm vibe',
      emoji: '🌅',
      youtube: 'https://www.youtube.com/results?search_query=Golden+Hour+JVKE'
    },
    {
      title: 'Ocean Eyes',
      artist: 'Billie Eilish',
      mood: 'Chill',
      vibe: 'Soft late-night feel',
      emoji: '🌊',
      youtube: 'https://www.youtube.com/results?search_query=Ocean+Eyes+Billie+Eilish'
    },

    // Energetic
    {
      title: 'Believer',
      artist: 'Imagine Dragons',
      mood: 'Energetic',
      vibe: 'Powerful and intense',
      emoji: '🔥',
      youtube: 'https://www.youtube.com/results?search_query=Believer+Imagine+Dragons'
    },
    {
      title: 'Stronger',
      artist: 'Kanye West',
      mood: 'Energetic',
      vibe: 'Workout and hype energy',
      emoji: '⚡',
      youtube: 'https://www.youtube.com/results?search_query=Stronger+Kanye+West'
    },
    {
      title: 'Hall of Fame',
      artist: 'The Script',
      mood: 'Energetic',
      vibe: 'Motivational anthem',
      emoji: '🏆',
      youtube: 'https://www.youtube.com/results?search_query=Hall+of+Fame+The+Script'
    },

    // Romantic
    {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      mood: 'Romantic',
      vibe: 'Soft and dreamy love mood',
      emoji: '🌹',
      youtube: 'https://www.youtube.com/results?search_query=Perfect+Ed+Sheeran'
    },
    {
      title: 'All of Me',
      artist: 'John Legend',
      mood: 'Romantic',
      vibe: 'Warm and heartfelt love song',
      emoji: '💞',
      youtube: 'https://www.youtube.com/results?search_query=All+of+Me+John+Legend'
    },
    {
      title: 'Until I Found You',
      artist: 'Stephen Sanchez',
      mood: 'Romantic',
      vibe: 'Vintage romantic feel',
      emoji: '💌',
      youtube: 'https://www.youtube.com/results?search_query=Until+I+Found+You+Stephen+Sanchez'
    },

    // Focus
    {
      title: 'Experience',
      artist: 'Ludovico Einaudi',
      mood: 'Focus',
      vibe: 'Calm concentration music',
      emoji: '📚',
      youtube: 'https://www.youtube.com/results?search_query=Experience+Ludovico+Einaudi'
    },
    {
      title: 'Time',
      artist: 'Hans Zimmer',
      mood: 'Focus',
      vibe: 'Deep work instrumental',
      emoji: '⏳',
      youtube: 'https://www.youtube.com/results?search_query=Time+Hans+Zimmer'
    },
    {
      title: 'Cornfield Chase',
      artist: 'Hans Zimmer',
      mood: 'Focus',
      vibe: 'Immersive and thoughtful',
      emoji: '🎼',
      youtube: 'https://www.youtube.com/results?search_query=Cornfield+Chase+Hans+Zimmer'
    }
  ];

  get filteredSongs(): Song[] {
    let filtered = this.selectedMood
      ? this.songs.filter(song => song.mood === this.selectedMood)
      : [];

    if (this.searchText.trim()) {
      filtered = filtered.filter(song =>
        song.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        song.artist.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    return filtered;
  }

  selectMood(mood: string) {
    this.selectedMood = mood;
    this.searchText = '';
  }

  resetSelection() {
    this.selectedMood = '';
    this.searchText = '';
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
  }
}