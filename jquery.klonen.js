(function($){
    $.fn.klonen = function(options){
        var settings = {
            add_link: "Add more",
            remove_link: "Remove",
            base_element: "",
            insert_after: "",
            get_length:    0
        }
        var that = this;
        if ( options ) { 
            $.extend( settings, options );
        }

        var addLink = setAddLink(), 
            removeLink = setRemoveLink();

        function setAddLink(){
            addLink = $('<a href="#" >' + settings.add_link + '</a>');
            addLink.click(function(){
                var new_element = $(settings.base_element).clone();

                plusLength(new_element);
                new_element.insertAfter(settings.insert_after);
                return false;
            });
            return addLink;
        }

        function setRemoveLink(){
            var link = $('<a href="">' + settings.remove_link + '</a>');
            link.click(function(){
                that.children(settings.get_length + ':not(:first):last').remove();
                return false;
            });
            return link;
        }
        
        function plusLength(new_element){
            var length = $(settings.get_length).length;
            $(new_element).find('li, label, input', 'select').each(function(){
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
                }

                $.each(attributes, function(index, value){
                    var attr = $(that).attr(value);
                    $(that).attr(value, attr.replace(/\d/, length));
                });
            });
        }
        
        var links_container = $('<div>').append(addLink).append(' ').append(removeLink);
        links_container.appendTo(this);
        return links_container;
    }
})(jQuery)