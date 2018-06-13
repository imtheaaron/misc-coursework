function init() {
// function to build the first pie chart and the bubble chart w/ sample 940
    pie_url = "samples/BB_940"
    Plotly.d3.json(pie_url, function(error,response) {
        var data = response;
        console.log(data);
        otus = data.otu_ids;
        otu10 = otus.slice(0,10);
        values = data.sample_values;
        values10 = values.slice(0,10);

        var pie_data = [{
            values: values10,
            labels: otu10,
            type: "pie"
        }];

        var layout = {
            height: 600,
            width: 800,
        };

        Plotly.plot("pie", pie_data, layout);
    })
}

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

function optionChanged(value) {
    var sample_id = value;
    console.log(sample_id);

    update_plots(sample_id);
}

function update_plots(sample_id) {
    var sample_url = "/samples/" + String(sample_id);
    console.log(sample_url);
    Plotly.d3.json(sample_url, function(error, response) {
        var data = response;
        console.log('new response', response);
        otus = data.otu_ids;
        otu10 = otus.slice(0,10);
        console.log('new otu', otu10);
        values = data.sample_values;
        values10 = values.slice(0,10);

        var pie_data = [{
            values: values10,
            labels: otu10,
        }];

        var PIE = document.getElementById("pie");
        Plotly.restyle(PIE, "values", [values10]);
        Plotly.restyle(PIE, "labels", [otu10]);
    })
}

selector();
init();