var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
// import { svg } from 'd3';
import { BuildMapService } from '../buildMap.service';
import { Router } from '@angular/router';
import json from '../data.json';
import { TestMapService } from '../testMap.service';
var ClassComponent = /** @class */ (function () {
    function ClassComponent(buildMapService, router, testMapService) {
        this.buildMapService = buildMapService;
        this.router = router;
        this.testMapService = testMapService;
        this.pageNumber = 5;
        this.pdfSrc = "https://cors-anywhere.herokuapp.com/http://greenteapress.com/thinkjava6/thinkjava.pdf";
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [];
        this.nodesNextMap = [];
        // store the link words
        this.linkwords = [];
        // store the links
        this.links = [];
        // store the white rectangulars as simulation for text fields
        this.glossaries = [];
        this.gTexts = [];
    }
    ClassComponent.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = json.nodes6;
        this.nodesNextMap = json.nodesNextMap6;
        this.linkwords = json.linkwords6;
        var temp = json.links6;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true, "id": null };
            link.id = temp[i].id;
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodes[n];
            }
            if (temp[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodes[n];
            }
            if (temp[i].source.includes("linkwords[")) {
                var n = parseInt(temp[i].source.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.source = this.linkwords[n];
            }
            if (temp[i].target.includes("linkwords[")) {
                var n = parseInt(temp[i].target.split("linkwords[")[1].split(']')[0]);
                // console.log(n);
                link.target = this.linkwords[n];
            }
            if (temp[i].source.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].source.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.source = this.nodesNextMap[n];
            }
            if (temp[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                link.target = this.nodesNextMap[n];
            }
            this.links.push(link);
        }
        var temp2 = json.glossaries6;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null };
            glossary.page = temp2[i].page;
            if (temp2[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodes[n];
            }
            if (temp2[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp2[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                glossary.target = this.nodesNextMap[n];
            }
            this.glossaries.push(glossary);
        }
        var temp3 = json.gTexts6;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null };
            gText.page = temp3[i].page;
            if (temp3[i].target.includes("nodes[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodes[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodes[n];
            }
            if (temp3[i].target.includes("nodesNextMap[")) {
                // console.log(temp[i]);
                var n = parseInt(temp3[i].target.split("nodesNextMap[")[1].split(']')[0]);
                //  console.log(n);
                gText.target = this.nodesNextMap[n];
            }
            gText.text = temp3[i].text;
            // console.log(gText);
            this.gTexts.push(gText);
        }
        //  console.log(this.gTexts);
        // console.log(this.nodes[0]);
    };
    ClassComponent.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.buildMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.sliderCircle, this.nodesNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton, this.gButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.sliderCircle = svgArray[7];
        this.circleNextMap = svgArray[8];
        this.toNextMapRect = svgArray[9];
        this.gButton = svgArray[10];
        var polygon = this.svg.append("polygon")
            .attr('class', 'cluster')
            .attr("points", "380,25 250,30 80,100 0,160 200,450 500,450 900,450 1050,200")
            .style("fill", "white")
            .style('opacity', '0.6')
            .style("stroke", "black")
            .style("strokeWidth", "10px")
            .attr('visibility', 'hidden');
        var gProgress = this.svg.append('svg:g')
            .attr('class', 'progress')
            .attr('visibility', 'hidden');
        gProgress.append('rect')
            .attr('class', 'progress')
            .attr('x', '250')
            .attr('y', '200')
            .attr('width', '400')
            .attr('height', '60')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('fill', 'blue')
            .style('opacity', '0.8');
        gProgress.append('text')
            .attr('class', 'progress')
            .attr('x', '450')
            .attr('y', '210')
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle');
        polygon.on('mousedown', function (d) {
            _this.svg.select('g.progress').attr('visibility', function (d) { return (_this.svg.select('g.progress').attr('visibility') === 'hidden') ? 'visible' : 'hidden'; });
            _this.testMapService.callServerTest().subscribe(function (data) {
                var resultChoicetest = 0;
                var resultBlocktest = 0;
                if ((parseInt(data['class']['choicetest']['true']) + parseInt(data['class']['choicetest']['false']) !== 0)) {
                    resultChoicetest = parseInt(data['class']['choicetest']['true']) / (parseInt(data['class']['choicetest']['true']) + parseInt(data['class']['choicetest']['false']));
                }
                if ((parseInt(data['class']['blocktest']['total']['true']) + parseInt(data['class']['blocktest']['total']['false']) !== 0)) {
                    resultBlocktest = parseInt(data['class']['blocktest']['total']['true']) / (parseInt(data['class']['blocktest']['total']['true']) + parseInt(data['class']['blocktest']['total']['false']));
                }
                _this.svg.select('text.progress').text('choiceTest: ' + resultChoicetest + '% blockTest: ' + resultBlocktest + '%');
            });
        });
        this.svg.append('circle')
            .attr('class', 'activateCluster')
            .attr('cx', '50')
            .attr('cy', '420')
            .attr('r', 10)
            .attr('fill', 'orange')
            .attr('cursor', 'pointer')
            .on('mousedown', function (d) {
            _this.svg.selectAll('polygon').attr('visibility', _this.svg.selectAll('polygon').attr('visibility') === 'hidden' ? 'visible' : 'hidden');
        })
            .on('mouseup', function (d) {
            if (_this.svg.selectAll('polygon').attr('visibility') === 'hidden') {
                _this.svg.select('g.progress').attr('visibility', 'hidden');
            }
        });
        this.svg.append('text')
            .attr('class', 'activateCluster')
            .attr('x', '50')
            .attr('y', '450')
            .attr('fill', 'purple')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text('activate cluster');
        var button = this.svg.append("foreignObject")
            .attr("width", 80)
            .attr("height", 40)
            .attr('x', '640')
            .attr('y', '5')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/class/modify6" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Modify</a>');
        var button1 = this.svg.append("foreignObject")
            .attr("width", 110)
            .attr("height", 40)
            .attr('x', '520')
            .attr('y', '25')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/class/test6" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Block Test</a>');
        var button2 = this.svg.append("foreignObject")
            .attr("width", 110)
            .attr("height", 40)
            .attr('x', '730')
            .attr('y', '25')
            .append('xhtml:div')
            .attr('class', 'button')
            .html('<a href="http://localhost:4200/class/singleChoice" class="btn btn-primary btn-sm active btn-block" role="button" aria-pressed="true">Choice Test</a>');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    ClassComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.svg.attr('clickOnNode') === 'false') {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            //  console.log('this is my : ' + this.selectedNode );
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.selectAll('foreignObject.gButton').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
        }
        this.restart();
    };
    ClassComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        // this.mousedownNode = null;
        // this.mouseupNode = null;
        // this.mousedownLink = null;
        // this.clickOnNode = false;
        this.svg.attr('clickOnNode', 'false');
        // remove all white rectangulars and their contents when the scale is 1
        if (this.k === 1) {
            // this.svg.selectAll('rect').remove();
            // this.svg.selectAll('text.gText').remove();
            // this.svg.selectAll('image.gImage').remove();
        }
    };
    ClassComponent.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    ClassComponent.prototype.restart = function () {
        var _this = this;
        var buildMap = this.buildMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.gButton, this.circle, this.nodes, this.linkword, this.linkwords, this.sliderCircle, this.nodesNextMap, this.circleNextMap, 0, 'class');
        this.pageNumber = this.svg.attr("page");
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.glossary = buildMap[3];
        this.glossary.merge(this.glossary);
        this.gText = buildMap[4];
        this.gText.merge(this.gText);
        this.gImage = buildMap[5];
        this.gImage.merge(this.gImage);
        this.linkword = buildMap[6];
        this.linkword.merge(this.linkword);
        this.gButton = buildMap[9];
        this.gButton.merge(this.gButton);
        this.routerLink = buildMap[8];
        if (this.routerLink === '/object') {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + 395 + ')');
        }
        if (this.routerLink !== null) {
            setTimeout(function () {
                d3.select('rect.toNext').attr('visibility', 'hidden');
                d3.select('text.toNext').attr('visibility', 'hidden');
                d3.selectAll('rect.button').attr('visibility', 'hidden');
                d3.select('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    __decorate([
        ViewChild('graphContainer', { static: true }),
        __metadata("design:type", ElementRef)
    ], ClassComponent.prototype, "graphContainer", void 0);
    ClassComponent = __decorate([
        Component({
            selector: 'app-class',
            templateUrl: './class.component.html',
            styleUrls: ['./class.component.css'],
            providers: [BuildMapService, TestMapService],
        }),
        __metadata("design:paramtypes", [BuildMapService, Router, TestMapService])
    ], ClassComponent);
    return ClassComponent;
}());
export { ClassComponent };
//# sourceMappingURL=class.component.js.map