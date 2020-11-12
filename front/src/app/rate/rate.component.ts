import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm, FormsModule, FormGroup, FormControl, Validators} from "@angular/forms"
import {Post} from '../posts/post.model'
import {PostsService} from '../posts/posts.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs'; 

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit{
 
 pups: Post[] = []
  private pupsSub: Subscription; 
  form: FormGroup;
  private id: String
  name: String
  breed:string
  quote: string
  rates: number
  imagePath: string
 
   constructor(public pupsService: PostsService, public route: ActivatedRoute) { 
    
   }
 
   ngOnInit() {

      
      this.pupsService.getP()
      this.pupsSub = this.pupsService.getPostUpdateListener().subscribe((pups:Post[]) =>{
      this.pups = pups; 
      console.log(this.pups)
     
      
      }
 
   )}

   rateRPup(event, id, name, breed,  rates, imagePath){
     this.id =  id
      this.pupsService.ratePup(id, name, breed,  rates, imagePath)
      
      this.ngOnInit(); 
      

    }

   rateLPup(event, id, name, breed,  rates, imagePath){
    
      this.pupsService.ratePup(id, name, breed,  rates, imagePath)
      
      this.ngOnInit(); 
      
   } 
       

  }