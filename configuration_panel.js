var a = {
    "configurationSettings": [{
        "category": "<b>NPS Banner</b>",
        "fields": [{
            "type": "boolean",
            "fieldName": "displaytitle",
            "label": "Show NPS Banner",
            "tooltip": ""
        }, {
            "type": "string",
            "fieldName": "title",
            "label": "Title Text:",
            "tooltip": "",
            "placeHolder": "Defaults to map name"
        }, {
            "type": "string",
            "fieldName": "subtitle",
            "label": "Subtitle Text:",
            "tooltip": "Use 'none' for no subtitle",
            "placeHolder": "Defaults to map summary"
        }, {
            "type": "string",
            "fieldName": "organization",
            "label": "Organization Text:",
            "tooltip": "Appears on right side of banner",
            "placeHolder": "Park or Region"
        }, {
            "type": "paragraph",
            "value": "The following hyperlinks, if provided, will appear in the banner"
        }, {
            "type": "string",
            "fieldName": "link1text",
            "label": "Text of link #1:",
            "placeHolder": ""
        }, {
            "type": "string",
            "fieldName": "link1url",
            "label": "URL of link #1:",
            "placeHolder": ""
        }, {
            "type": "string",
            "fieldName": "link2text",
            "label": "Text of link #2:",
            "placeHolder": ""
        }, {
            "type": "string",
            "fieldName": "link2url",
            "label": "URL of link #2:",
            "placeHolder": ""
        }, {
            "type": "paragraph",
            "value": ""
        }]
    }, {
        "category": "<b>Left Panel</b>",
        "fields": [ {
            "type": "paragraph",
            "value": "The left panel toggles between the following selected content when the web map has data that supports that content.  If nothing is selected/supported, the left panel is unavailable."
        }, {
            "type": "boolean",
            "fieldName": "displaylegend",
            "label": "Legend",
            "tooltip": ""
        }, {
            "type": "boolean",
            "fieldName": "displaydetails",
            "label": "Details",
            "tooltip": "Description of the web map, or text below"
        }, {
            "type": "boolean",
            "fieldName": "displayeditor",
            "label": "Editor",
            "tooltip": "Display editor if web map contains editable feature service layer"
        }, {
            "type": "paragraph",
            "value": "Use the following text to replace the map description when showing Details"
        }, {
            "type": "string",
            "fieldName": "description",
            "label": "Details Text:",
            "stringFieldOption": "richtext"
        }, {
            "type": "boolean",
            "fieldName": "leftPanelVisibility",
            "label": "Show panel on startup",
            "tooltip": "If unchecked the panel will start out hidden"
        }, {
            "type": "number",
            "fieldName": "leftpanewidth",
            "label": "Panel width:",
            "tooltip": "Width of the left panel in pixels",
            "constraints" :{min:100,places:0}
        }, {
            "type": "boolean",
            "fieldName": "displayeditortoolbar",
            "label": "Show Editor Toolbar",
            "tooltip": "Display the optional editor toolbar when the editor is enabled."
        }, {
            "type": "paragraph",
            "value": ""
        }]
    }, {
        "category": "<b>Toolbar Items</b>",
        "fields": [ {
            "type": "boolean",
            "fieldName": "displaytimeslider",
            "label": "Time Slider *",
            "tooltip": "Display time slider for time enabled web map"
        }, {
            "type": "boolean",
            "fieldName": "displayprint",
            "label": "Print",
            "tooltip": "Widget for printing the map"
        }, {
            "type": "boolean",
            "fieldName": "displayprintlegend",
            "label": "-  Print Legend on Map",
            "tooltip": "Adds the legend to the map when printing"
        }, {
            "type": "boolean",
            "fieldName": "displaylayerlist",
            "label": "Layer List *",
            "tooltip": "Widget for turning on/off map layers"
        }, {
            "type": "boolean",
            "fieldName": "displaybasemaps",
            "label": "Basemaps",
            "tooltip": "Widget for selecting different basemaps"
        }, {
            "type": "boolean",
            "fieldName": "displaybookmarks",
            "label": "Bookmarks *",
            "tooltip": "Display the read-only bookmarks contained in the web map."
        }, {
            "type": "boolean",
            "fieldName": "displaymeasure",
            "label": "Measure",
            "tooltip": "Widget for measuring distance and area on the map."
        }, {
            "type": "boolean",
            "fieldName": "displaysearch",
            "label": "Search",
            "tooltip": ""
        }, {
            "type": "boolean",
            "fieldName": "searchextent",
            "label": "-  Search in map extents",
            "tooltip": "Search will be global if not checked"
        }, {
            "type": "paragraph",
            "value": "* These menu items will appear in the application if the web map has layers that support them."
        }]
    },  {
         "category":"<b>Map Widgets</b>",
         "fields":[
             {
                 "type": "boolean",
                 "fieldName": "displayslider",
                 "label": "Zoom in/out buttons",
                 "tooltip": ""
             },
             {
                 "type":"boolean",
                 "fieldName":"home",
                 "label":"Full extent button"
             },
             {
                 "type":"boolean",
                 "fieldName":"locate",
                 "label":"Locate button",
                 "tooltip": "Used to add the user's location to the map"
             },
             {
                 "type": "boolean",
                 "fieldName": "displayoverviewmap",
                 "label": "Overview Map",
                 "tooltip": ""
             },
             {
                 "type": "boolean",
                 "fieldName": "displayscalebar",
                 "label": "Scalebar",
                 "tooltip": ""
             },
             {
                 "type": "string",
                 "fieldName": "customlogoimage",
                 "label": "Logo on map:",
                 "placeHolder": "URL to image:",
                 "tooltip": "Image appears in lower-right corner of map if provided"
             },
             {
                 "type": "string",
                 "fieldName": "customlogolink",
                 "label": "Destination for logo click:",
                 "placeHolder": "URL to website",
                 "tooltip": "Where should the user go when they click the image"
             }]
      }],
    "values": {
        "displaytitle": true,

        "leftPanelVisibility": true,
        "leftpanewidth": 300,
        "displaylegend": true,
        "displaydetails": true,
        "displayeditor": false,
        "displayeditortoolbar": false,

        "displaytimeslider": false,
        "displayprint": true,
        "displayprintlegend": true,
        "displaylayerlist": true,
        "displaybasemaps": true,
        "displaybookmarks": true,
        "displaymeasure": true,
        "displayshare": true,
        "displaysearch": false,
        "searchextent": false,

        "displayslider":true,
        "home": true,
        "locate": false,
        "displayoverviewmap": true,
        "displayscalebar": true
    }
}
