import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataList = [];
  myJSON : any;
  constructor() {
  }

  ngOnInit() {
    //Getting data from API
    this.myJSON =
    {
      "id": 1000,
      "question": "Who is this request for?",
      "type": "Single",
      "required": true,
      "answers": [
          {
              "id": 100001,
              "type": "radio",
              "answer": "Me",
              "nextQuestion": 1001,
              "extendedFields": []
          },
          {
              "id": 100002,
              "type": "radio",
              "answer": "For someone else",
              "nextQuestion": 1001,
              "extendedFields": []
          }
      ]
  }
  this.mapData(this.myJSON);
  }

  //Mapping API data to dynamic view JSON
  mapData(obj) {
    var question = {
      title: obj.question,
      quizType : obj.type
    }
    
    for (var i in obj.answers) {
      var item = obj.answers[i];
       var item2 = obj.answers[i].extendedFields;
    

      this.dataList.push({
        controlType: item.type,
        label: item.answer,
        key: "qfirst",
        quizId : item.nextQuestion,
        options: [
          { key: item.answer },
        ],
        extendedFields : [
          item2[0]
        ]


      });
    }
    this.dataList.unshift(question)

  }

 /* getData() {
    //Invoke the first question API for quiz.
    return this.apiService.get("/Questions/getFirst/1001", true).subscribe(
      (data: any) => {
        if (data) {
          this.mapData(data);
        //  console.log("Data" + JSON.stringify(data.answers[0].extendedFields.label));
        }
      },
      error => {
          console.log("ERROR" + error);
      }
    );
  }*/

  getNext(){

  }
}
