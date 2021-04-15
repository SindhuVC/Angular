import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs = [
    { field: 'MetricName' },
    { field: 'value' },
    { field: '24 hr avg'},
    { field: '24 hr min/max'},
    { field: '72 hr avg'},
    { field: '72 hr min/max'}

];

rowData = [
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    { MetricName:'Ad1 Voltage' ,value: '0' ,'24 hr avg':'0' , '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max':'0/0' },
    
];


wellData=[
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
  {
    name:'Well1004A',
    tpsi:'000000',
    cpsi:'000000',
    flow:'000000'
  },
]

tankData=[
  {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  },
  {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  }, {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  }, {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  }, {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  }, {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  }, {
    name:'Oil Tank 1',
    oil:'100',
    water:'100',
    temp:'100'
  },
]


}
