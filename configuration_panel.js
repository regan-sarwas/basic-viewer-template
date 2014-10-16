{
    "configurationSettings": [{
        "category": "<b>General</b>",
        "fields": [{
            "type": "webmap",
            "label": "Select a map"
        }]
    }, {
        "category": "<b>NPS Banner</b>",
        "fields": [{
            "type": "boolean",
            "fieldName": "displaytitle",
            "label": "Show NPS Banner *",
            "tooltip": ""
        }, {
            "type": "paragraph",
            "value": "* Banner will automatically be hidden when this app is embedded in another web page."
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
            "value": "The following hyperlinks, if provided, will appear centered at the bottom of the banner"
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
        }]
    }, {
        "category": "<b>Left Panel</b>",
        "fields": [ {
            "type": "boolean",
            "fieldName": "leftPanelVisibility",
            "label": "Show panel on startup"
        }, {
            "type": "number",
            "fieldName": "leftpanewidth",
            "label": "Width of left panel (pixels)",
            "tooltip": "Displays the description of the web map",
            "constraints" :{min:100,places:0}
        },{
            "type": "boolean",
            "fieldName": "displaylegend",
            "label": "Legend *",
            "tooltip": ""
        }, {
            "type": "boolean",
            "fieldName": "displaydetails",
            "label": "Details *",
            "tooltip": "Displays the description of the web map"
        }, {
            "type": "string",
            "fieldName": "description",
            "label": "Details Text",
            "tooltip": "Can include limited html formatting",
            "placeHolder": "Defaults to the description of the web map"
        }, {
            "type": "boolean",
            "fieldName": "displayeditor",
            "label": "Editor *",
            "tooltip": "Display editor if web map contains editable feature service layer"
        }, {
            "type": "boolean",
            "fieldName": "displayeditortoolbar",
            "label": "Editor Toolbar",
            "tooltip": "Display the optional editor toolbar when the editor is enabled."
        }, {
            "type": "paragraph",
            "value": "* These will only appear in the application if the web map has data to support them."
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
            "label": "Bookmarks",
            "tooltip": "Display the read-only bookmarks contained in the web map."
        }, {
            "type": "boolean",
            "fieldName": "displaymeasure",
            "label": "Measure",
            "tooltip": "Widget for measuring distance and area on the map."
        }, {
            "type": "boolean",
            "fieldName": "displayshare",
            "label": "Share",
            "tooltip": "Links to sharing with social media sites"
        }, {
            "type": "boolean",
            "fieldName": "displaysearch",
            "label": "Search",
            "tooltip": ""
        }, {
            "type": "boolean",
            "fieldName": "searchextent",
            "label": "Search in map extents",
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
                 "type": "boolean",
                 "fieldName": "constrainmapextent",
                 "label": "Constrain Map Extents",
                 "tooltip": "When true users will not be able to pan/zoom outside the initial extent."
             },
             {
                 "type":"boolean",
                 "fieldName":"home",
                 "label":"Full extent button"
             },
             {
                 "type":"boolean",
                 "fieldName":"locate",
                 "label":"Location button",
                 "tooltip": "Used to add the user's location to the map"
             },
             {
                 "type": "boolean",
                 "fieldName": "displayoverviewmap",
                 "label": "Include Overview Map",
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
      },{
        "category": "<b>Print Settings</b>",
        "fields": [{
            "type": "boolean",
            "fieldName": "displayprintlegend",
            "label": "Display Legend on Printout",
            "tooltip": ""
        }, {
            "type": "boolean",
            "fieldName": "printlayout",
            "tooltip": "Display all print layouts",
            "label": "Layout"
        }, {
            "type": "string",
            "fieldName": "printformat",
            "tooltip": "Specify the output format",
            "label": "Format:"
        },
//        {
//            "type": "string",
//            "fieldName": "owner",
//            "tooltip": "Specify an owner for the app - used by the print option",
//            "label": "Owner:",
//            "placeHolder": "Defaults to map owner"
//        },
            {
                "type": "paragraph",
                "value": "Define print settings for the print service. When Layout is true all available print layout templates will be displayed in the pick list. View the rest services directory for the print service to see a list of valid layout and format options."
            }]
      }],
    "values": {
        //Banner
        "displaytitle": true,

        //Left Panel
        "leftPanelVisibility": true,
        "leftpanewidth": 300,
        "displaylegend": true,
        "displaydetails": true,
        "displayeditor": true,
        "displayeditortoolbar": false,

        //Toolbar Widgets
        "displaytimeslider": false,
        "displayprint": false,
        "displaylayerlist": true,
        "displaybasemaps": true,
        "displaybookmarks": true,
        "displaymeasure": true,
        "displayshare": false,
        "displaysearch": true,
        "searchextent": true,

        //Map Widgets
        "displayslider":true,
        "constrainmapextent": false,
        "home": true,
        "locate": false,
        "displayoverviewmap": false,
        "displayscalebar": false,

        //Print Settings
        "displayprintlegend": true,
        "printlayout": false
    }
}
