# jQuery.Klonen


If you need to add dynamically more elements to a nested_forms with Rails you might find this plugin useful. I've got to do this so many times in so many projects that i finally decided to make it a plugin. 

 **Klonen** changes the attributes **for** for `<label>`, **name** for `<input>` and **id** for `<li>, <input>, <label> and <select>`. I included `<li>` elements because the project i'm working on right now uses formtastic.

## Usage


You need to choose a container div which will get appended two links, one for adding more elements and one for removing the last one.

    $("#container-div").klonen({});

### Settings
    
* `add_link:` The text for the Add more link.
* `remove_link:` The text for the remove more link.
* `base_element:` The element you want to clone and be the base/model for the new ones.
* `insert_after:` Where you want to put the div containing the add/remove links.
* `get_length:`  The selector that you want to use as a counter.

## TODO

* To make `<img>` links.
* Clear the fields for the added elements.