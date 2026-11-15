import { Component, computed, OnInit, signal, WritableSignal,effect, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './models/Task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from './shared/components/dialog/dialog.component';

interface NavItem {
  label: string;
  href: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DialogComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  isOpen = signal<boolean>(false);
  protected readonly titleControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(100)],
  });

  defaultTasks :Task[] = [{
    id:1,
    title : "Angular study",
    description : "work on project while studying",
    done : false
  },{
    id:2,
    title : "Workout study",
    description : "Workout Push day",
    done : false
  },{
    id:3,
    title : "prepare food",
    description : "batch cook the food of the whole week",
    done : true
  }]


  tasks : WritableSignal<Task[]> = signal(this.loadTasks());

  ngOnInit(): void {
       console.log(this.isOpen());
  }
  constructor(){
    effect(()=>{
        
        localStorage.setItem('tasks',JSON.stringify(this.tasks()));
      })
      
  }

    protected readonly navItems: NavItem[] = [
    { label: 'Overview', href: '#overview' }, 
    { label: 'Tasks', href: '#tasks' },
    { label: 'Goals', href: '#goals' },
    { label: 'Habits', href: '#habits' },
    { label: 'Activities', href: '#activities' },
  ];


 protected readonly active = signal('Overview');
 protected readonly tasksDone = computed(()=>{
  return this.tasks().filter(tasks=> tasks.done===true).length;
 });
  
  protected readonly tasksTotal = computed(()=>this.tasks().length);

    
 /*  protected readonly progress = computed(
    () => (this.tasksDone() / this.tasksTotal()) * 100,
  ); */

  protected readonly progress = computed(()=>{
    const total = this.tasksTotal();
    if(total<=0) return 0;

    const percent = (this.tasksDone() / total) * 100;
    //console.log(Math.min(100, Math.max(0,percent)))
    return Math.min(100, Math.max(0,percent));
  })
 



  protected readonly activeGoals = signal(4);
 
  protected readonly priorities = signal([
    { title: 'Study Angular Signals', done: false },
    { title: "Review yesterday's tasks", done: true },
  ]);
 
  protected select(event: Event, label: string): void {
    event.preventDefault();
    this.active.set(label);
  }
  toggle(p:Task){
    this.tasks.update(currentTasks =>
      currentTasks.map(task=>
        task.id === p.id ? {...task,done : !task.done} : task
      )
    );
  }

  loadTasks():Task[]{
    try{
    const storedTasks = localStorage.getItem('tasks');
      if(storedTasks !== null){
        const parsedTasks = JSON.parse(storedTasks) as Task[];

        if(Array.isArray(parsedTasks)){
          return parsedTasks;
        }
      }
      return this.defaultTasks;
   //return (storedTasks!==null) ? (JSON.parse(storedTasks) as Task[]) : this.defaultTasks
    }catch(error){
    console.error(error);
    return this.defaultTasks;
  }
  }

  handleDialogClose(isClosed:boolean){
    this.isOpen.set(isClosed);
    console.log(this.isOpen());
  }

  protected saveTask(){
    return null;
  }
}
