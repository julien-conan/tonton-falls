import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="header-bg">
      <nav>
        <a routerLink="/">Articles</a>
        <a routerLink="/about">A propos</a>
      </nav>
      <div class="header-content">
          <h1>Tonton Falls</h1>
          <p>Longboard et glisse urbaine</p>
      </div>
    </header>
    <router-outlet />
  `,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .header-bg {
      background-image: url('/images/cover.png');
      background-size: cover;
      background-position: center;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
      margin-bottom: 2rem;
    }

    .header-bg::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      z-index: 1;
    }

    .header-content {
      position: relative;
      z-index: 2;
      text-align: center;
    }

    nav {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1.5rem 2rem;
      text-align: left;
      z-index: 10;
    }

    nav a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-weight: bold;
    }
  `,
})
export class App {}
