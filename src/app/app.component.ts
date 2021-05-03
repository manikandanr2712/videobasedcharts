
import { ElementRef, Inject, NgZone, OnDestroy, PLATFORM_ID, ViewChild } from "@angular/core";
import { Component, OnInit ,AfterViewInit } from "@angular/core";

import $ from "jquery";
// declare var $: any;

import "amstock3/amcharts/amcharts";
import "amstock3/amcharts/serial";
import "amstock3/amcharts/themes/light";
import "amstock3/amcharts/amstock";
import * as moment from "moment/moment.js";
import 'moment-duration-format';
import { AmChartsService } from "@amcharts/amcharts3-angular";
// interface Duration extends moment.Duration {
//   format: (template?: string, precision?: number, settings?: DurationSettings) => Date;
// }

// interface DurationSettings {
//   forceLength : false,
//   precision : 0,
//   template: "hh:mm:ss";
//   trim: false;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTime: any;
  chart: any;
  @ViewChild("video", { static: false }) video: ElementRef;
  channellist = [
    {name: 'Sun Tv'},
    {name: 'K Tv'},
    {name: 'Q Tv'},
    {name: 'Polimer Tv'},
    {name: 'Adithya Tv'}
  ];
  regionlist = [
    {name: 'Telugana'},
    {name: 'Tamilnadu'},
    {name: 'Kerala'},
    {name: 'Karnataka'},
    {name: 'Goa'}
  ]
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private AmCharts: AmChartsService) { }

ngOnInit() {
  // this.AmCharts.useUTC = true;
  let chart = this.AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
  
  //   dataDateFormat: "JJ:NN:SS",
  //   categoryAxesSettings: {
  //     minPeriod: "ss",
  //     equalSpacing: true
  //   },
  
  //   dataSets: [
  //     {
  //       fieldMappings: [
  //         {
  //           fromField: "value",
  //           toField: "value"
  //         }
  //       ],
  
  //       dataProvider: [
  //         { date: "00:00:00", value: 10 },
  //         { date: "00:00:01", value: 5 },
  //         { date: "00:00:02", value: 6 },
  //         { date: "00:00:03", value: 6 },
  //         { date: "00:00:04", value: 10 },
  //         { date: "00:00:05", value: 5 },
  //         { date: "00:00:06", value: 9 },
  //         { date: "00:00:07", value: 9 },
  //         { date: "00:00:08", value: 8 },
  //         { date: "00:00:09", value: 8 },
  //         { date: "00:00:10", value: 5 },
  //         { date: "00:00:11", value: 6 },
  //         { date: "00:00:12", value: 7 },
  //         { date: "00:00:13", value: 5 },
  //         { date: "00:00:14", value: 10 },
  //         { date: "00:00:15", value: 8 },
  //         { date: "00:00:16", value: 7 },
  //         { date: "00:00:17", value: 6 },
  //         { date: "00:00:18", value: 9 },
  //         { date: "00:00:19", value: 10 }
  //       ],
  //       categoryField: "date"
  //     }
  //   ],
  
  //   panels: [
  //     {
  //       stockGraphs: [
  //         {
  //           valueField: "value",
  //           // bullet: "round",
  //           type: "smoothedLine"
  //         }
  //       ],
  //       // "listeners": [{
  //       //   "event": "changed",
  //       //   "method": function(e) {
  //       //     console.log('changed event fired',e)
  //       //   }
  //       // }],
  //     }],
  //   chartCursorSettings: {
  //     valueBalloonsEnabled: true,
  //     categoryBalloonDateFormats: [ {
  //                 period: "ss",
  //                 format: "JJ:NN:SS"
  //               } ]
  //   },
  // "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
  //   "chartScrollbar": {
  //     "updateOnReleaseOnly": true
  //   }
  "dataProvider": [{
    "y": 0.034899496702,
    "x": 0
  }, {
    "y": 0.01745240643728351,
    "x": 1000
  }, {
    "y": 0.03489949670250097,
    "x": 2000
  }, {
    "y": 0.052335956242943835,
    "x": 3000
  }, {
    "y": 0.0697564737441253,
    "x": 4000
  }, {
    "y": 0.08715574274765817,
    "x": 5000
  }, {
    "y": 0.10452846326765347,
    "x": 6000
  }, {
    "y": 0.12186934340514748,
    "x": 7000
  }, {
    "y": 0.13917310096006544,
    "x": 8000
  }, {
    "y": 0.15643446504023087,
    "x": 9000
  }, {
    "y": 0.17364817766693033,
    "x": 10000
  }, {
    "y": 0.1908089953765448,
    "x": 11000
  }, {
    "y": 0.20791169081775934,
    "x": 12000
  }, {
    "y": 0.224951054343865,
    "x": 13000
  }, {
    "y": 0.24192189559966773,
    "x": 14000
  }, {
    "y": 0.25881904510252074,
    "x": 15000
  }, {
    "y": 0.27563735581699916,
    "x": 16000
  }, {
    "y": 0.29237170472273677,
    "x": 17000
  }, {
    "y": 0.3090169943749474,
    "x": 18000
  }, {
    "y": 0.3255681544571567,
    "x": 19000
  }, 
  ],

  "graphs": [{
    "balloonText": "[[category]]: [[value]]",
    "bullet": "circle",
    "valueField": "y"
  }],
  
  "categoryField": "x",
  "categoryAxis": {
    "parseDates": true,
    "boldPeriodBeginning": false,
    "dateFormats": [
      {
      "period": "fff",
      "format": "JJ:NN:SS"
    }, {
      "period": "ss",
      "format": "JJ:NN:SS"
    }, {
      "period": "mm",
      "format": "JJ:NN:SS"
    }, {
      "period": "hh",
      "format": "JJ:NN:SS"
    }, {
      "period": "DD",
      "format": "MMM DD"
    }, {
      "period": "WW",
      "format": "MMM DD"
    }, {
      "period": "MM",
      "format": "MMM"
    }, {
      "period": "YYYY",
      "format": "YYYY"
    }
  ],
  
    "equalSpacing": true,
    "minPeriod": "ss"
  },
  "chartCursor": {
    "categoryBalloonDateFormat": "JJ:NN:SS",
  }
  });
  
chart.addListener("clickGraphItem", function(e) {
console.log("e",moment(e.item.serialDataItem.dataContext.x ).format("hh:mm:ss"));
var str = moment(e.item.serialDataItem.dataContext.x ).format("hh:mm:ss");
var secPart = str.substring(6);
 if(secPart) {
  video.currentTime = secPart;
  var myVideo: any = document.getElementById("video");
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}
});

  var video = document.getElementById("video");
video.addEventListener("timeupdate", function(e) {
  chart.chartCursor.showCursorAt(new Date(Math.floor(e.target.currentTime * 1000))); //convert currentTime to milliseconds
});
}

//  settime(){
//   var video = document.getElementById("video");
//   console.log(video.currentTime); //----->output for example 15.3
 
//   console.log(video.currentTime);//----->>output always 0
// }
}

function playPause(arg0: string, playPause: any) {
  throw new Error("Function not implemented.");
}
