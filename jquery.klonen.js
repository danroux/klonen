/*
 * jQuery.Klonen version 0.1 - An easy way to clone nested_forms elements.
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
            add_link: "Add more",
            remove_link: "Remove",
            insert_after: "",
            get_length:    0
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
            addLink = $('<a href="#" >' + settings.add_link + '</a>');
            addLink.click(function(){
                newElement = $(baseElement).clone();
                plusLength(newElement);
                bindCallbacks(newElement);
                newElement.insertAfter(settings.insert_after);
                return false;
            });
            return addLink;
        }

        function setRemoveLink(){
            var link = $('<a href="">' + settings.remove_link + '</a>');
            link.click(function(){
                baseElement.children(settings.get_length + ':not(:first):last').remove();
                return false;
            });
            return link;
        }
        
        function plusLength(newElement){
            var length = $(settings.get_length).length;
            $(newElement).find('li, label, input, select').each(function(){
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