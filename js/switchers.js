$(document).ready(function () {

    var anmoptions = {
        element: document.getElementById('mapholder'),
        scope: "usa",
        fills: {
            defaultFill: '#CB04A5', // The keys in this object map to the "fillKey" of [data] or [bubbles]
            GA: '#934683',
            AL: '#934683',
            LA: '#934683',
            TN: '#934683',
            TX: '#934683',
            NY: '#934683',
            NJ: '#934683',
            FL: '#934683',
            bubbles: '#F433AB'
        },
        geographyConfig: {
            hideHawaiiAndAlaska: true,
            borderWidth: 1,
            borderOpacity: 1,
            borderColor: '#FDFDFD',
            highlightFillColor: '#2D1115'
        },
        data: {
            GA: {fillKey: 'GA'},
            AL: {fillKey: 'AL'},
            LA: {fillKey: 'LA'},
            NJ: {fillKey: 'NJ'},
            NY: {fillKey: 'NY'},
            TX: {fillKey: 'TX'},
            TN: {fillKey: 'TN'},
            FL: {fillKey: 'FL'}
        },
        bubblesConfig: {
            borderWidth: 0,
            borderOpacity: 0,
            borderColor: '#FFFFFF',
            popupOnHover: true, // True to show the popup while hovering
            radius: null,
            fillColor: 'white',
            fillKey: 'bubbles',
            fillOpacity: 0.75,
            animate: true,
            highlightOnHover: true,
            highlightFillColor: '#FC8D59',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            highlightBorderWidth: 0,
            highlightBorderOpacity: 1,
            highlightFillOpacity: 0.85,
            exitDelay: 100, // Milliseconds
            key: JSON.stringify
        }
    };

    var stacksoptions = {
        element: document.getElementById('mapholder'),
        scope: "usa",
        fills: {
            defaultFill: '#CB04A5', // The keys in this object map to the "fillKey" of [data] or [bubbles]
            LA: '#934683',
            bubbles: 'orange'
        },
        geographyConfig: {
            hideHawaiiAndAlaska: true,
            borderWidth: 1,
            borderOpacity: 1,
            borderColor: '#FDFDFD',
            highlightFillColor: '#2D1115'
        },
        data: {
            LA: {fillKey: 'LA'},
            NY: {fillKey: 'LA'}
        },
        bubblesConfig: {
            borderWidth: 0,
            borderOpacity: 0,
            borderColor: '#FFFFFF',
            popupOnHover: true, // True to show the popup while hovering
            radius: null,
            fillColor: 'white',
            fillKey: 'bubbles',
            fillOpacity: 0.75,
            animate: true,
            highlightOnHover: true,
            highlightFillColor: '#FC8D59',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            highlightBorderWidth: 0,
            highlightBorderOpacity: 1,
            highlightFillOpacity: 0.85,
            exitDelay: 100, // Milliseconds
            key: JSON.stringify
        }
    };

    var jandtwpoptions = {
        element: document.getElementById('mapholder'),
        scope: "usa",
        fills: {
            defaultFill: '#CB04A5', // The keys in this object map to the "fillKey" of [data] or [bubbles]
            bubbles: 'hotpink'
        },
        geographyConfig: {
            hideHawaiiAndAlaska: true,
            borderWidth: 1,
            borderOpacity: 1,
            borderColor: '#FDFDFD',
            highlightFillColor: '#2D1115'
        },
        data: {
            LA: {fillKey: 'LA'}
        },
        bubblesConfig: {
            borderWidth: 0,
            borderOpacity: 0,
            borderColor: '#FFFFFF',
            popupOnHover: true, // True to show the popup while hovering
            radius: null,
            fillColor: 'white',
            fillKey: 'bubbles',
            fillOpacity: 0.75,
            animate: true,
            highlightOnHover: true,
            highlightFillColor: '#FC8D59',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            highlightBorderWidth: 0,
            highlightBorderOpacity: 1,
            highlightFillOpacity: 0.85,
            exitDelay: 100, // Milliseconds
            key: JSON.stringify
        }
    };

    function changeToJandtwp() {
        $("#mapholder").datamaps(jandtwpoptions);

        $(".active").removeClass();
        $("li#jandtwp").addClass("active");
    }


    function changeToStacks() {
        $("#mapholder").datamaps(stacksoptions);
        console.log(stacksoptions);
        $(".active").removeClass();
        $("li#stacks").addClass("active");
    }

    function changeToAnm() {
        $("#mapholder").datamaps(anmoptions);
        $(".active").removeClass();
        $("li#anm").addClass("active");
    }

    $("li#anm").on('click', changeToAnm);
    $("li#jandtwp").on('click', changeToJandtwp);
    $("li#stacks").on('click', changeToStacks);

});