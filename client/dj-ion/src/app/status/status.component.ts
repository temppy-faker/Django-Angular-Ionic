import { Component, OnInit, OnDestroy} from '@angular/core';

import { Status } from './status';

import { StatusAPIService } from './status.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy{
    results:Status[] = []
    statusListSub:any;
    refreshCount = 0
  constructor(private statusAPI: StatusAPIService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.statusListSub = this.statusAPI.list().subscribe(data=>{
      //console.log(data)
      this.results = data.results // as [Status]
    })
  }

  ngOnDestroy(){
    if (this.statusListSub){
      this.statusListSub.unsubscribe()
    }
  }

  statusDidUpdate(event, statusItem){
    console.log(statusItem)
    // console.log("status did update here", event)
    // this.statusItem = event as Status
    // this.getData()
    statusItem = event
    // 
  }

}
