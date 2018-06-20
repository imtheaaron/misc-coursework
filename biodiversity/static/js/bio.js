function init() {
// function to build the first pie chart and the bubble chart w/ sample 940
    selector();    

    // create the initial pie chart using the first sample
    url = "/samples/BB_940"
    Plotly.d3.json(url, function(error,response) {
        var data = response;
        otus = data.otu_ids;
        otu10 = otus.slice(0,10);
        values = data.sample_values;
        values10 = values.slice(0,10);

        var pie_data = [{
            values: values10,
            labels: otu10,
            text: [],
            type: "pie",
        }];

        var layout = {
            height: 600,
            width: 600,
            title: "Top 10 Microbes per Sample by %"
        };

        Plotly.plot("pie", pie_data, layout);
        
        // create the bubble chart
        var bubble_data = [{
            x: otus,
            y: values,
            mode: "markers",
            marker: {
                size: values,
                color: otus,
                colorscale: "Earth",
            }
        }];

        var bubble_layout = {
            title: "Sample Values for Each OTU",
            showlegend: false,
            height: 500,
            width: 1000,
            hovermode: 'closest',
        };

        Plotly.newPlot("bubble", bubble_data, bubble_layout);

        // add hovertext to both charts
        Plotly.d3.json("/otu", function(error,response) {
            var descriptions = response;
            var desc_list = [];
            for(i=0; i<10; i++) {
                desc = descriptions[otu10[i]+1];
                desc_list.push(desc);
            };
            var PIE = document.getElementById("pie");
            var BUBBLE = document.getElementById("bubble");
            Plotly.restyle(PIE, "hovertext", [desc_list])
            Plotly.restyle(BUBBLE, "hovertext", [descriptions])
        })
    });

    // create the metadata box
    meta_url = "/mdata/BB_940";
    Plotly.d3.json(meta_url, function(error, response) {
        sample_meta = response;
        Plotly.d3.select(".card-body").append("P").text("AGE: " + sample_meta.AGE);
        Plotly.d3.select(".card-body").append("P").text("BBTYPE: " + sample_meta.BBTYPE);
        Plotly.d3.select(".card-body").append("P").text("ETHNICITY: " + sample_meta.ETHNICITY);
        Plotly.d3.select(".card-body").append("P").text("GENDER: " + sample_meta.GENDER);
        Plotly.d3.select(".card-body").append("P").text("LOCATION: " + sample_meta.LOCATION);
        Plotly.d3.select(".card-body").append("P").text("SAMPLEID: " + sample_meta.SAMPLEID);
    })
}

// function to build the selection dropdown
function selector() {
    var url = "/names";
    var select = document.getElementById("selDataset");
    Plotly.d3.json(url, function(error, response) {
        
        console.log(response);
        var data = response;
        for(var i = 0; i < data.length; i++) {
            var id = data[i];
            var el = document.createElement("option");
            el.textContent = id;
            el.value = id;
            select.appendChild(el);
        }
    })
}

// function to grab a selected value from the dropdown and call the function to build plots on the new value
function optionChanged(value) {
    var sample_id = value;
    update_plots(sample_id);
}

// function to update plots using a new value from the selector
function update_plots(sample_id) {
    var sample_url = "/samples/" + String(sample_id);
    // update the pie chart
    Plotly.d3.json(sample_url, function(error, response) {
        var data = response;
        console.log('new response', response);
        otus = data.otu_ids;
        otu10 = otus.slice(0,10);
        console.log('new otu', otu10);
        values = data.sample_values;
        values10 = values.slice(0,10);

        var PIE = document.getElementById("pie");
        Plotly.restyle(PIE, "values", [values10]);
        Plotly.restyle(PIE, "labels", [otu10]);

        var bubble_data = [{
            x: otus,
            y: values,
            mode: "markers",
            marker: {
                size: values,
                color: otus,
                colorscale: "Earth",
            }
        }];

        var bubble_layout = {
            title: "Sample Values for Each OTU",
            showlegend: false,
            height: 500,
            width: 1000,
            hovermode: 'closest',
        };

        Plotly.newPlot("bubble", bubble_data, bubble_layout);

        // add the new hovertext to each rebuilt plot
        Plotly.d3.json("/otu", function(error,response) {
            var descriptions = response;
            var desc_list = [];
            for(i=0; i<10; i++) {
                desc = descriptions[otu10[i]+1];
                desc_list.push(desc);
            };
            var PIE = document.getElementById("pie");
            Plotly.restyle(PIE, "hovertext", [desc_list]);
            var BUBBLE = document.getElementById("bubble");
            Plotly.restyle(BUBBLE, "hovertext", [descriptions]);
        })
    })

    // update the MetaData box
    var meta_url = "/mdata/" + String(sample_id);
    Plotly.d3.json(meta_url, function(error, response) {
        sample_meta = response;
        Plotly.d3.select(".card-body").html("<h4 class='card-top-text'>Sample MetaData</h4><hr>");
        Plotly.d3.select(".card-body").append("P").text("AGE: " + sample_meta.AGE);
        Plotly.d3.select(".card-body").append("P").text("BBTYPE: " + sample_meta.BBTYPE);
        Plotly.d3.select(".card-body").append("P").text("ETHNICITY: " + sample_meta.ETHNICITY);
        Plotly.d3.select(".card-body").append("P").text("GENDER: " + sample_meta.GENDER);
        Plotly.d3.select(".card-body").append("P").text("LOCATION: " + sample_meta.LOCATION);
        Plotly.d3.select(".card-body").append("P").text("SAMPLEID: " + sample_meta.SAMPLEID);
    })
}

init();