/**
 * Created by ansonliu on 2016/3/15.
 */

// ref from https://raw.githubusercontent.com/angular/angular.js/master/test/ngAria/ariaSpec.js

'use strict';

describe('ng.ddslick', function () {
    var scope, $compile, element;

    beforeEach(module('ng.ddslick'));

    afterEach(function () {
        dealoc(element);
    });

    function injectScopeAndCompiler() {
        return inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            scope = _$rootScope_;
        });
    }

    function compileElement(inputHtml) {
        element = $compile(inputHtml)(scope);
        scope.$digest();
    }

    describe('ddslick-select', function () {
        beforeEach(injectScopeAndCompiler);

        it('should compile ddslick', function () {
            compileElement('<ddslick-select></ddslick-select>');
            scope.$apply();
            expect(element.attr).toBe('true');

        });

        it('should ', function () {

        });

        it('should attach aria-hidden to ng-show', function () {
            compileElement('<div ng-show="val"></div>');
            scope.$apply('val = false');
            expect(element.attr('aria-hidden')).toBe('true');

            scope.$apply('val = true');
            expect(element.attr('aria-hidden')).toBe('false');
        });

        it('should attach aria-hidden to ng-hide', function () {
            compileElement('<div ng-hide="val"></div>');
            scope.$apply('val = false');
            expect(element.attr('aria-hidden')).toBe('false');

            scope.$apply('val = true');
            expect(element.attr('aria-hidden')).toBe('true');
        });

        it('should not change aria-hidden if it is already present on ng-show', function () {
            compileElement('<div ng-show="val" aria-hidden="userSetValue"></div>');
            expect(element.attr('aria-hidden')).toBe('userSetValue');

            scope.$apply('val = true');
            expect(element.attr('aria-hidden')).toBe('userSetValue');
        });

        it('should not change aria-hidden if it is already present on ng-hide', function () {
            compileElement('<div ng-hide="val" aria-hidden="userSetValue"></div>');
            expect(element.attr('aria-hidden')).toBe('userSetValue');

            scope.$apply('val = true');
            expect(element.attr('aria-hidden')).toBe('userSetValue');
        });

        it('should always set aria-hidden to a boolean value', function () {
            compileElement('<div ng-hide="val"></div>');

            scope.$apply('val = "test angular"');
            expect(element.attr('aria-hidden')).toBe('true');

            scope.$apply('val = null');
            expect(element.attr('aria-hidden')).toBe('false');

            scope.$apply('val = {}');
            expect(element.attr('aria-hidden')).toBe('true');


            compileElement('<div ng-show="val"></div>');

            scope.$apply('val = "test angular"');
            expect(element.attr('aria-hidden')).toBe('false');

            scope.$apply('val = null');
            expect(element.attr('aria-hidden')).toBe('true');

            scope.$apply('val = {}');
            expect(element.attr('aria-hidden')).toBe('false');
        });
    });


    describe('aria-hidden when disabled', function () {
        beforeEach(configAriaProvider({
            ariaHidden: false
        }));
        beforeEach(injectScopeAndCompiler);

        it('should not attach aria-hidden', function () {
            scope.$apply('val = false');
            compileElement('<div ng-show="val"></div>');
            expect(element.attr('aria-hidden')).toBeUndefined();

            compileElement('<div ng-hide="val"></div>');
            expect(element.attr('aria-hidden')).toBeUndefined();
        });
    });
});

/*
 function expectAriaAttrOnEachElement(elem, ariaAttr, expected) {
 angular.forEach(elem, function(val) {
 expect(angular.element(val).attr(ariaAttr)).toBe(expected);
 });
 }

 function configAriaProvider(config) {
 return function() {
 angular.module('ariaTest', ['ngAria']).config(function($ariaProvider) {
 $ariaProvider.config(config);
 });
 module('ariaTest');
 };
 }*/