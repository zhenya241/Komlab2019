var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TestMapService } from '../../testMap.service';
var SingleChoiceComponent = /** @class */ (function () {
    function SingleChoiceComponent(testMapService) {
        this.testMapService = testMapService;
        this.questions = [
            { question: "Which languange does java belong to?",
                items: ["A. Machine Language", "B.Assembly Language", "C. High-Level Language", "None of them"],
                userchoice: "",
                rightanswer: "C",
                explanation: "explanation for the question 1"
            },
            { question: "Which one is the division operator?",
                items: ["A.   /   ", "B.  \\  ", "C.  *   ", "D.   %   "],
                userchoice: "",
                rightanswer: 'A',
                explanation: "explanation for the question 2"
            }
        ];
        this.questionPosition = 0;
        //public thisQuestion: Question = this.questions[this.questionPosition];
        this.textNow = '';
    }
    SingleChoiceComponent.prototype.ngOnInit = function () {
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
    };
    SingleChoiceComponent.prototype.submitAnswer = function () {
        var storeresult = [];
        for (var j = 0; j < this.questions.length; j++) {
            if (this.questions[j].userchoice === this.questions[j].rightanswer) {
                storeresult.push({ "result": true });
            }
            else {
                storeresult.push({ "result": false });
            }
        }
        var str = '';
        var resultAnswer = { "true": "0", "false": "0" };
        for (var i = 0; i < this.questions.length; i++) {
            str += 'Question' + (i + 1).toString() + '\n';
            if (storeresult[i]['result']) {
                resultAnswer['true'] = (parseInt(resultAnswer['true']) + 1).toString();
                str += "Your answer is right.\n" + this.questions[i].explanation + '\n';
            }
            else {
                resultAnswer['false'] = (parseInt(resultAnswer['false']) + 1).toString();
                str += "Your answer is wrong.\n" + this.questions[i].explanation + '\n';
            }
            this.textNow = str;
            this.testMapService.callServer('program', resultAnswer, 'choicetest');
        }
        document.getElementById('submit').disabled = true;
        this.textNow = str;
        //const blob = new Blob([JSON.stringify(storeresult)],{type:'application/json'});
        //saveAs(blob,'user1.json');
    };
    SingleChoiceComponent.prototype.questionPrevious = function () {
        this.questionPosition -= 1;
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
        document.getElementById('next').disabled = false;
    };
    SingleChoiceComponent.prototype.questionNext = function () {
        this.questionPosition += 1;
        if (this.questionPosition === this.questions.length - 1) {
            document.getElementById('next').disabled = true;
        }
        document.getElementById('previous').disabled = false;
    };
    SingleChoiceComponent.prototype.check = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].userchoice === '')
                return true;
        }
        return false;
    };
    SingleChoiceComponent = __decorate([
        Component({
            selector: 'app-singleChoice',
            templateUrl: './singleChoice.component.html',
            styleUrls: ['./singleChoice.component.css'],
            providers: [TestMapService]
        }),
        __metadata("design:paramtypes", [TestMapService])
    ], SingleChoiceComponent);
    return SingleChoiceComponent;
}());
export { SingleChoiceComponent };
//# sourceMappingURL=singleChoice.component.js.map