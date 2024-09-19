import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
    post: Post | null | undefined;
    postId: number | null | undefined;

    constructor(private route: ActivatedRoute, private postService: PostService) { }

    ngOnInit() {
        this.postId = Number(this.route.snapshot.paramMap.get('id'));
        this.getPostById(this.postId);
    }

    getPostById(id: number | null) {
        this.post = this.postService?.getPostById(id) ?? null;
    }
}