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
var SingleChoiceComponent = /** @class */ (function () {
    function SingleChoiceComponent() {
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
        this.thisQuestion = this.questions[this.questionPosition];
        this.textNow = '';
    }
    SingleChoiceComponent.prototype.ngOnInit = function () {
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
    };
    SingleChoiceComponent.prototype.initQuestion = function () {
        this.textNow = '';
        document.getElementById('labelA').style.color = 'black';
        document.getElementById('labelB').style.color = 'black';
        document.getElementById('labelC').style.color = 'black';
        document.getElementById('labelD').style.color = 'black';
    };
    SingleChoiceComponent.prototype.submitAnswer = function () {
        if (this.thisQuestion.userchoice === "") {
            window.alert("You should have a choice!");
        }
        else if (this.thisQuestion.userchoice === this.thisQuestion.rightanswer) {
            this.textNow += 'You have a right answer.\n' + this.thisQuestion.explanation;
            document.getElementById('label' + this.thisQuestion.rightanswer).style.color = 'greenyellow';
        }
        else {
            this.textNow += "Sorry the right answer is " + this.thisQuestion.rightanswer + '.\n' + this.thisQuestion.explanation;
            document.getElementById('label' + this.thisQuestion.rightanswer).style.color = 'greenyellow';
            document.getElementById('label' + this.thisQuestion.userchoice).style.color = 'red';
        }
    };
    SingleChoiceComponent.prototype.questionPrevious = function () {
        this.questionPosition -= 1;
        if (this.questionPosition === 0) {
            document.getElementById('previous').disabled = true;
        }
        document.getElementById('next').disabled = false;
        this.initQuestion();
        this.thisQuestion = this.questions[this.questionPosition];
    };
    SingleChoiceComponent.prototype.questionNext = function () {
        this.questionPosition += 1;
        if (this.questionPosition === this.questions.length - 1) {
            document.getElementById('next').disabled = true;
        }
        document.getElementById('previous').disabled = false;
        this.initQuestion();
        this.thisQuestion = this.questions[this.questionPosition];
    };
    SingleChoiceComponent = __decorate([
        Component({
            selector: 'app-singleChoice',
            templateUrl: './singleChoice.component.html',
            styleUrls: ['./singleChoice.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SingleChoiceComponent);
    return SingleChoiceComponent;
}());
export { SingleChoiceComponent };
//# sourceMappingURL=singleChoice.component.js.map