import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        MatIcon,
        MatToolbar,
        MatCardContent,
        MatCard,
        MatMenu,
        MatMenuTrigger,
        MatIconButton,
        MatMenuItem,
        RouterOutlet,
        RouterLink,
    ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
