/*
 * jQuery.Klonen version 0.1.1 - An easy way to clone nested_forms elements.
 * http://github.com/danroux/klonen
 *
 * Copyright (c) 2011 Daniel Roux
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($){
    $.fn.klonen = function(options, callback){
        var settings = {
            addLink: "Add more",
            removeLink: "Remove",
            insertAfter: "",
            getLength:    0,
            toRemove: options.toRemove.push(["input[id$=destroy]", "label[for$=destroy]"])
        }

        if ( options ) { 
            $.extend( settings, options );
        }

        var baseElement = this;

        return function(){
            var  addLink = setAddLink(), 
                 removeLink = setRemoveLink(),
                 newElement;            
            var linksContainer = $('<div>').append(addLink).append(' ').append(removeLink);
            linksContainer.appendTo($(baseElement).parent());
            return baseElement;
        }();

        function setAddLink(){
            addLink = $('<a href="#" id="klonen_add">' + settings.addLink + '</a>');
            addLink.click(function(){
                createNewElement();
                return false;
            });
            return addLink;
        }

        function setRemoveLink(){
            var link = $('<a href="" id="klonen_remove">' + settings.removeLink + '</a>');
            link.click(function(){
                baseElement.children(settings.getLength + ':not(:first):last').remove();
                return false;
            });
            return link;
        }

        function createNewElement(){
            newElement = $(baseElement).clone();
            clearElement(newElement);
            plusLength(newElement);
            bindCallbacks(newElement);
            newElement.insertAfter(settings.insertAfter);
        }

        function clearElement(newElement){
            newElement.find('input[type=text], select, textarea').val('');
            newElement.find("input[type=checkbox], input[type=radio]").attr("checked", false);
            newElement.find(settings.toRemove.join(',')).remove();
            return newElement;
        }

        function plusLength(newElement){
            var length = $(settings.getLength).length;
            $(newElement).find('li, label, input, select, textarea').each(function(){
                var attributes = ["id"];
                var that = $(this);
                var tagName = this.tagName.toLowerCase();

                switch(tagName){
                case "label":
                    attributes.push("for");
                    break;
                case "input":
                    attributes.push("name");
                    break;
                case "select":
                    attributes.push("name");
                    break;
                }

                $.each(attributes, function(index, value){
                    var attr = $(that).attr(value);
                    $(that).attr(value, attr.replace(/\d/, length));
                });
            });
        }

        function bindCallbacks(newElement){
            if(typeof(callback) == 'function') callback(newElement);
        }
    };
})(jQuery);