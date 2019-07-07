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
import * as d3 from 'd3';
import { TestMapService } from '../../testMap.service';
import { Router } from '@angular/router';
import json from '../../data.json';
var Test1Component = /** @class */ (function () {
    function Test1Component(testMapService, router) {
        this.testMapService = testMapService;
        this.router = router;
        this.width = 1240;
        this.height = 480;
        this.k = 1;
        this.randomItem = [];
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
    }
    Test1Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = json.nodes1;
        this.nodesNextMap = json.nodesNextMap1;
        this.linkwords = json.linkwords1;
        var temp = json.links1;
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true };
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
        // console.log(this.nodes[0]);
    };
    Test1Component.prototype.ngAfterContentInit = function () {
        var _this = this;
        var svgArray = this.testMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.buildMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.circleNextMap = svgArray[4];
        this.toNextMapRect = svgArray[5];
        this.randomItem = this.testMapService.random_item(this.nodes.length);
        for (var i = 0; i < this.randomItem.length; i++) {
            this.svg.append('foreignObject')
                .attr('class', 'input')
                .attr('width', 110)
                .attr('height', 70)
                .attr('x', this.nodes[this.randomItem[i]].x - 55)
                .attr('y', this.nodes[this.randomItem[i]].y - 8)
                .append('xhtml:input')
                .attr('type', 'text')
                .attr('class', 'form-control')
                .style('height', '10px')
                .style('font-size', '1px')
                .attr('id', i.toString());
        }
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Test1Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    Test1Component.prototype.mouseup = function (source) {
        console.log('mouseup');
        this.svg.classed('active', false);
    };
    Test1Component.prototype.submitAnswer = function () {
        var resultAnswer = {};
        for (var i = 0; i < this.randomItem.length; i++) {
            if (document.getElementById(i.toString()).value === this.nodes[this.randomItem[i]].text) {
                resultAnswer['node' + this.randomItem[i].toString()] = "true";
                document.getElementById(i.toString()).style.backgroundColor = 'aquamarine';
            }
            else {
                resultAnswer['node' + this.randomItem[i].toString()] = "false";
                document.getElementById(i.toString()).style.backgroundColor = 'lightSalmon';
            }
        }
        for (var key in resultAnswer) {
            console.log(resultAnswer[key]);
        }
        document.getElementById('submitBlock').disabled = true;
        this.testMapService.callServer('computer science', resultAnswer, "blocktest");
    };
    Test1Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Test1Component.prototype.restart = function () {
        var _this = this;
        var offset = 0;
        var buildMap = this.testMapService.buildMicroMap(this.svg, this.path, this.links, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
        this.svg = buildMap[0];
        this.circle = buildMap[1];
        this.circle.merge(this.circle);
        this.path = buildMap[2];
        this.path.merge(this.path);
        this.linkword = buildMap[3];
        this.linkword.merge(this.linkword);
        this.circleNextMap = buildMap[4];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[5];
        // console.log(this.routerLink);
        if (this.routerLink != null) {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -600 + ',' + 0 + ')');
            setTimeout(function () {
                d3.select('rect.toNext').attr('visibility', 'hidden');
                d3.select('text.toNext').attr('visibility', 'hidden');
                d3.selectAll('rect.button').attr('visibility', 'hidden');
                d3.select('svg').attr('ready', true);
            }, 750);
            setTimeout(function () { _this.delayNavigation(); }, 750);
        }
    };
    Test1Component = __decorate([
        Component({
            selector: 'app-test1',
            templateUrl: './test1.component.html',
            styleUrls: ['./test1.component.css'],
            providers: [TestMapService],
        }),
        __metadata("design:paramtypes", [TestMapService, Router])
    ], Test1Component);
    return Test1Component;
}());
export { Test1Component };
//# sourceMappingURL=test1.component.js.map