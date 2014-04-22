(function() {
    var container,
        ToolBar = kendo.ui.ToolBar;

    module("Toolbar: JSON rendering", {
        setup: function() {
            container = $("<div id='toolbar' />").appendTo(QUnit.fixture);
        },

        teardown: function() {
            if (container.data("kendoToolBar")) {
                container.kendoToolBar("destroy");
            }
        }
    });

    /* BUTTON */

    test("button element has a k-button class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo" }
            ]
        });
        
        ok(container.find(".k-button").length);
    });

    test("button applies ID and text options", 2, function() {
        container.kendoToolBar({
            items: [
                { type: "button", id: "foo", text: "foo" }
            ]
        });
        
        var button = container.find("#foo");

        ok(button.length, "ID is applied");
        equal(button.text(), "foo", "Text is applied");
    });

    test("by default the button does not have k-state-disabled class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo" }
            ]
        });
        
        var button = container.find(".k-button");

        ok(!button.hasClass("k-state-disabled"));
    });

    test("button with enable: false receives k-state-disabled class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo", enable: false }
            ]
        });
        
        var button = container.find(".k-button");

        ok(button.hasClass("k-state-disabled"));
    });

    test("by default button does not have k-primary class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo" }
            ]
        });
        
        var button = container.find(".k-button");

        ok(!button.hasClass("k-primary"));
    });

    test("button with primary: true received k-primary class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo", primary: true }
            ]
        });
        
        var button = container.find(".k-button");

        ok(button.hasClass("k-primary"));
    });

    test("button attaches click event handler", 1, function() {
        container.kendoToolBar({
            items: [{ 
                type: "button",
                text: "foo",
                click: function() {
                    ok(true, "click event is fired"); 
                }
            }]
        });
        
        var button = container.find(".k-button");
        button.trigger("click");
    });

    test("spriteCssClass prepends a span element with corresponding class(es) to the button element", 3, function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo", spriteCssClass: "foo bar" }
            ]
        });

        var icon = container.find(".k-button").eq(0).children("span.k-sprite");

        equal(icon.length, 1);
        ok(icon.hasClass("foo"));
        ok(icon.hasClass("bar"));
    });

    test("spriteCssClass adds a k-button-icon class to empty button element", function() {
        container.kendoToolBar({
            items: [
                { type: "button", spriteCssClass: "foo bar" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icon"));
    });

    test("spriteCssClass adds a k-button-icontext class if button element has text", function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "content", spriteCssClass: "foo bar" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icontext"));
    });

    test("icon prepends a span element with corresponding class(es) to the button element", function() {
        container.kendoToolBar({
            items: [
                { type: "button", icon: "foo" }
            ]
        });

        var icon = container.find(".k-button").children("span.k-icon");

        equal(icon.length, 1);
        ok(icon.hasClass("k-i-foo"));
    });

    test("icon adds a k-button-icon class to button with no text", function() {
        container.kendoToolBar({
            items: [
                { type: "button", icon: "foo" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icon"));
    });

    test("icon adds a k-button-icontext class if button has text", function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo", icon: "foo" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icontext"));
    });

    test("imageUrl prepends an img element with src attribute to the button element", function() {
        container.kendoToolBar({
            items: [
                { type: "button", imageUrl: "foo" }
            ]
        });

        var image = container.find(".k-button").children("img.k-image");

        equal(image.length, 1);
        equal(image.attr("src"), "foo");
    });

    test("imageUrl adds a k-button-icon class to empty button element", function() {
        container.kendoToolBar({
            items: [
                { type: "button", imageUrl: "foo" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icon"));
    });

    test("imageUrl adds a k-button-icontext class if button has text", function() {
        container.kendoToolBar({
            items: [
                { type: "button", text: "foo", imageUrl: "foo" }
            ]
        });

        var button = container.find(".k-button");

        ok(button.hasClass("k-button-icontext"));
    });

    /* TOGGLE BUTTON */

    test("toggleButton has k-toggle-button class", 2, function() {
        container.kendoToolBar({
            items: [
                { type: "toggleButton", text: "foo" }
            ]
        });

        ok(container.find(".k-toggle-button").length);
        equal(container.children().text(), "foo", "ToggleButton has correct text");
    });

    test("by default toggleButton does not have k-state-selected class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "toggleButton", text: "foo" }
            ]
        });

        ok(!container.find(".k-toggle-button.k-state-on").length);
    });

    test("toggleButton with selected: true receives k-state-selected class", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "toggleButton", text: "foo", selected: true }
            ]
        });

        ok(container.find(".k-toggle-button.k-state-on").length);
    });

    /* BUTTON GROUP */

    test("renders buttonGroup from JSON", 2, function() {
        container.kendoToolBar({
            items: [
                { type: "buttonGroup", items: [
                        { id: "btn1", text: "Btn1" },
                        { id: "btn2", text: "Btn2" },
                        { id: "btn3", text: "Btn3" }
                    ]
                }
            ]
        });

        ok(container.children("div.k-button-group").length, "ButtonGroup element is rendered");
        equal(container.find("div.k-button-group").children().length, 3, "Button group contains correct amount of items");
    });

    test("buttonGroup applies ID option", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "buttonGroup", id: "foo", items: [] }
            ]
        });

        var buttonGroup = container.find("#foo");

        ok(buttonGroup.length, "ID is applied");
    });

    /* SPLIT BUTTON */

    test("renders splitButton from JSON", 2, function() {
        container.kendoToolBar({
            items: [
                { type: "splitButton", id: "splitButton", name: "splitButton", text: "Split Button", options: [
                        { id: "option1", text: "Option 1" },
                        { id: "option2", text: "Option 2" },
                        { id: "option3", text: "Option 3" },
                        { id: "option4", text: "Option 4" }
                    ]
                }
            ]
        });

        ok(container.children("div.k-split-button").length, "SplitButton element is rendered");
        equal(container.find("div.k-split-button > .k-split-button-dropdown").children().length, 4, "SplitButton dropdown contains correct amount of items");
    });

    /* SEPARATOR */

    test("renders separator from JSON", 1, function() {
        container.kendoToolBar({
            items: [
                { type: "separator" }
            ]
        });

        ok(container.children(".k-toolbar-separator").length, "Separator element is rendered");
    });

})();
