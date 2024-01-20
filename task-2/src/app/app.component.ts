import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './Models/Post';
import { Comment } from './Models/Comment';
import { Album } from './Models/Album';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    //Getting Data from API for Posts
    this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data:Post[])=>{
      this.allPosts = data;
    });

    //Getting Data from API for Comments
    this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
    .subscribe((data:Comment[])=>{
      this.allComments = data;
    });

    //Getting Data from API for Albums
    this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
    .subscribe((data:Album[])=>{
      this.allAlbums = data;
    });

    //Getting Data from API for Todos
    this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .subscribe((data:Todo[])=>{
      this.allTodos = data;
    });

    console.log("Data Fetched using HTTP Requests in the ngOnInit Hook")

  }

  title = 'task-2';
  allPosts: Post[] = [];
  allComments: Comment[] = [];
  allAlbums: Album[] = [];
  allTodos: Todo[] = [];
  selectedOption: string = "";
  searchText: string = "";

  onPostsclick(){
    this.selectedOption = "Posts";
  }

  onCommentsclick(){
    this.selectedOption = "Comments";
  }

  onAlbumsClick(){
    this.selectedOption = "Albums";
  }

  onTodoClick(){
    this.selectedOption = "Todos";
  }

  searchClicked(){

  }
  
  check(val:string){
    return parseInt(val,10);
  }
}
