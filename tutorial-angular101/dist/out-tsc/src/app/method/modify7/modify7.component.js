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
import { Router } from '@angular/router';
// import example from '../assets/example.json';
import json from '../../data.json';
import { ModifyMapService } from '../../modifyMap.service';
var Modify7Component = /** @class */ (function () {
    function Modify7Component(modifyMapService, router) {
        this.modifyMapService = modifyMapService;
        this.router = router;
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
    Modify7Component.prototype.ngOnInit = function () {
        // console.log(json.nodes);
        this.nodes = json.nodes7;
        this.nodesNextMap = json.nodesNextMap7;
        this.linkwords = json.linkwords7;
        var temp = json.links7;
        // console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            var link = { "source": null, "target": null, "left": false, "right": true, "id": null };
            link.id = temp[i].id;
            if (temp[i].source.includes("nodes[")) {
                // console.log(temp[i].source);
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
        var temp2 = json.glossaries7;
        for (var i = 0; i < temp2.length; i++) {
            var glossary = { "target": null, "hidden": true, "width": 60, "height": 80, "page": null, 'id': null };
            glossary.page = temp2[i].page;
            glossary.id = temp2[i].id;
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
        var temp3 = json.gTexts7;
        for (var i = 0; i < temp3.length; i++) {
            var gText = { "text": null, "target": null, "hidden": true, "page": null, 'id': null };
            gText.page = temp3[i].page;
            gText.id = temp3[i].id;
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
    Modify7Component.prototype.ngAfterContentInit = function () {
        // document.getElementById('slider').style.color = 'black';
        var _this = this;
        // (<HTMLInputElement>document.getElementById('slider')).onchange = this.restart;
        var svgArray = this.modifyMapService.initSvg(this.svg, this.width, this.height, this.path, this.circle, this.linkword, this.glossary, this.gText, this.gImage, this.circleNextMap, this.toNextMapRect, this.linkwords, this.toNextMapButton);
        //  this.svg = this.modifyMapService.initSvg(this.svg, this.width, this.height)
        this.svg = svgArray[0];
        // add the svg<g> element to group svg shapes together  
        this.path = svgArray[1];
        this.circle = svgArray[2];
        this.linkword = svgArray[3];
        this.glossary = svgArray[4];
        this.gText = svgArray[5];
        this.gImage = svgArray[6];
        this.circleNextMap = svgArray[7];
        this.toNextMapRect = svgArray[8];
        // this part works with normal html element
        // this.svg.append("foreignObject")
        // .attr("width", 800)
        // .attr("height", 400)
        // .append("xhtml:div")
        // .style("font", "14px 'Helvetica Neue'")
        // .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");
        //this part dosen't work with pdf-viewer
        // this.svg.append("foreignObject")
        // .attr('y',200)
        // .attr("width", 800)
        // .attr("height", 480)
        // .append("xhtml:pdf-viewer")
        // .style("display", "block")
        // .attr("src", this.pdfSrc)
        // // .attr('ng-reflect-src', 'https://cors-anywhere.herokuap')
        // .attr("render-text", true)
        // // .attr('ng-reflect-render-text',true)
        // .attr("page", "21")
        // // .attr('ng-reflect-page', '21')
        // // .attr('ng-reflect-zoom', '0.5')
        // // .attr('ng-reflect-show-all', false)
        // // .src(this.pdfSrc)
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    Modify7Component.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        console.log('mousedown');
        if (this.svg.attr('clickOnNode') === 'false') {
            this.svg.selectAll('rect.gRect').attr('visibility', 'hidden');
            this.svg.selectAll('text.gText').attr('visibility', 'hidden');
            this.svg.selectAll('image.gImage').attr('visibility', 'hidden');
            this.svg.select('foreignObject.pdf').attr('visibility', 'hidden');
            this.restart();
        }
        this.restart();
    };
    Modify7Component.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        this.svg.attr('clickOnNode', 'false');
    };
    Modify7Component.prototype.delayNavigation = function () {
        this.router.navigate([this.routerLink]);
    };
    // refresh function
    Modify7Component.prototype.restart = function () {
        // console.log('restart');
        var _this = this;
        var offset = 0;
        var buildMap = this.modifyMapService.buildMicroMap(this.svg, this.path, this.links, this.glossary, this.glossaries, this.gText, this.gTexts, this.gImage, this.circle, this.nodes, this.linkword, this.linkwords, this.nodesNextMap, this.circleNextMap, offset);
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
        this.circleNextMap = buildMap[7];
        this.circleNextMap.merge(this.circleNextMap);
        this.routerLink = buildMap[8];
        // console.log(this.routerLink);
        if (this.routerLink === '/variable') {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + 0 + ',' + -260 + ')');
        }
        else if (this.routerLink === '/object') {
            this.svg.selectAll('ellipse').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('text.eText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('text.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('path.link').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('ellipse.linkword').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('rect.gRect').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('text.gText').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('image.gImage').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
            this.svg.selectAll('text.eTextNextMap').transition()
                .duration(750)
                .attr('transform', 'translate(' + -730 + ',' + -330 + ')');
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
        ViewChild('pdfViewer', { static: false }),
        __metadata("design:type", ElementRef)
    ], Modify7Component.prototype, "pdfViewers", void 0);
    Modify7Component = __decorate([
        Component({
            selector: 'app-modify7',
            templateUrl: './modify7.component.html',
            styleUrls: ['./modify7.component.css'],
            providers: [ModifyMapService],
        }),
        __metadata("design:paramtypes", [ModifyMapService, Router])
    ], Modify7Component);
    return Modify7Component;
}());
export { Modify7Component };
//# sourceMappingURL=modify7.component.js.map