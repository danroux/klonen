# jQuery.Klonen


If you need to add dynamically more elements to a nested_forms with Rails you might find this plugin useful. I've got to do this so many times in so many projects that i finally decided to make it a plugin. 

 **Klonen** changes the attributes **for** for `<label>`, **name** for `<input>` and **id** for `<li>, <input>, <label>, <select>` and `<textarea>`. I included `<li>` elements because the project i'm working on right now uses formtastic.

## Usage

You only have to choose the element that you want to clone and pass a settings parameter.

    $("#element-to-clone").klonen({});

### Settings
    
* `addLink:` The text for the Add more link.
* `removeLink:` The text for the remove more link.
* `insertAfter:` Where you want to put the div containing the add/remove links.
* `getLength:`  The selector that you want to use as a counter.
* `toRemove:`    Elements you want to remove from the cloned element.

## TODO

* Generate dynamic ids for the links.
* To make `<img>` links.
* Fix the error on loading.