# Dependencies
#------------------------
from flask import Flask, jsonify, render_template, redirect
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine

import numpy as np

app = Flask(__name__)

# create an engine to conenct to our database and perform sql queries
#---------------------------------
engine = create_engine('sqlite:///db/belly_button_biodiversity.sqlite', echo=False)
conn = engine.connect()

Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

# reflect the db tables into classes, create dataframes:
#-------------------------------
samples = Base.classes.samples
otu = Base.classes.otu
metadata = Base.classes.samples_metadata

samples_data = pd.read_sql("SELECT * FROM samples", conn)
otu_data = pd.read_sql("SELECT * FROM otu", conn)
metadata_data = pd.read_sql("SELECT * FROM samples_metadata", conn)

# Flask Routes
#-------------------------------
@app.route("/")
def index():
    return render_template("index.html")

@app.route('/names')
def names():
    sample_names = list(samples_data.columns.values)[1:]
    return jsonify(sample_names)

@app.route('/otu')
def otu():
    otu_descriptions = list(otu_data.lowest_taxonomic_unit_found)
    return jsonify(otu_descriptions)

@app.route('/metadata/<sample>')
def metadata(sample):
    query_id = sample[3:]
    meta_one = session.query(metadata.AGE, metadata.BBTYPE, metadata.ETHNICITY, metadata.GENDER, metadata.LOCATION, metadata.SAMPLEID).\
        filter(metadata.SAMPLEID == query_id).one()
    meta_dict = {
        'AGE': meta_one[0], 
        'BBTYPE': meta_one[1], 
        'ETHNICITY': meta_one[2], 
        'GENDER': meta_one[3], 
        'LOCATION': meta_one[4], 
        'SAMPLEID': meta_one[5]
        }
    return jsonify(meta_dict)

@app.route('/wfreq/<sample>')
def wfreq(sample):
    query_id = sample[3:]
    wwf = session.query(metadata.WFREQ).filter(metadata.SAMPLEID == query_id).one()[0]
    return jsonify(wwf)

@app.route('/samples/<sample>')
def samples(sample):
    query_id = sample[3:]
    sample_df = samples_data.sort_values(query_id, ascending=False)
    sample_otus = list(sample_df.otu_id)
    sample_values = list(sample_df[query_id])
    sample_dict = {'otu_ids': sample_otus, 'sample_values': sample_values}
    return jsonify(sample_dict)