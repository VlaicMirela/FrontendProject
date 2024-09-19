import { Injectable } from '@angular/core';
import {TeamMember} from "./team-member";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
    private teamMembers: TeamMember[] = [];

    constructor() {
        this.loadTeamMembers(); // Load data from localStorage or fetch it
    }

    async loadTeamMembers(): Promise<void> {
        const storedData = localStorage.getItem('teamMembers');
        if (storedData) {
            await this.loadFromLocalStorage(storedData); // Load from localStorage if available
        } else {
            await this.fetchTeamMembers(); // Fetch from the JSON file if not available
        }
    }

    private loadFromLocalStorage(storedData: string): void {
        this.teamMembers = JSON.parse(storedData); // Parse and assign data from localStorage
    }

    private fetchTeamMembers(): Promise<void> {
        return fetch('/assets/team-members.json')
            .then(response => response.json())
            .then(data => {
                this.teamMembers = data;
                localStorage.setItem('teamMembers', JSON.stringify(data)); // Store in localStorage
            });
    }

    getTeamMemberByName(name: string | null): TeamMember | undefined {
        return this.teamMembers.find(member => member.name === name);
    }

    getTeamMembersByRole(role: string | null): Observable<TeamMember[]> {
        return of(this.teamMembers.filter(member => member.role === role));
    }

}